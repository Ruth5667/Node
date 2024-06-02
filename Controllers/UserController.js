import Links from "../Models/Links.js";
import Users from "../Models/Users.js";
const UserController = {
  getList: async (req, res) => {
    try {
      const users = await Users.find().populate('links');//ללא סינון
      res.json(users);
    }
    catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  getById: async (req, res) => {
    try {
      // await Users.find({_id:req.params.id})
      const user = await Users.findById(req.params.id).populate('links');//שליפה לפי מזהה
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { name, email, password, links } = req.body;
    try {
      const linkObjects = await Links.insertMany(links); // יצירת קישורים חדשים אם יש קישורים במערך
      const linkIds = linkObjects.map(link => link._id); // יצירת מערך של מזהי הקישורים
      // יצירת משתמש חדש
      const newUser = new Users({ _id, name, email, password, links: linkIds });
      await newUser.save(); // שמירת המסמך במסד הנתונים
      // שליחת המשתמש החדש בתשובה
      res.json(newUser);
    }
    catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, email, password, links } = req.body;

    try {
      const linkObjects = await Links.insertMany(links)
      const linkIds = linkObjects.map(link => link._id); // יצירת מערך של מזהי הקישורים
      const updatedUser = await Users.findByIdAndUpdate(id, { name, email, password, links: linkIds }, { new: true }).populate('links');//עדכון לפי מזהה
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Users.findByIdAndDelete(id).populate('links');//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default UserController;
