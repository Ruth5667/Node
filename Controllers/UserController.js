import Users from "../Models/Users.js";
const UserController = {
    getList: async (req, res) => {
      try{
        const users = await Users.find();//ללא סינון
      res.json(users);
      }
      catch(e){
        res.status(400).json({message: e.message});
      }
    },
    getById: async (req, res) => {
      try {
        await Users.find({_id:req.params.id})
      const user = await Users.findById(req.params.id);//שליפה לפי מזהה
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }    },

    add: async (req, res) => {
      const { name,  email, password, links } = req.body;
      try {
        const newUser = new Users({ name, email, password, links });
        await newUser.save(); // שמירת המסמך במסד הנתונים
        res.json(newUser);
        // res.status(201).send(newUser);

      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    update: async (req, res) => {
      const { id } = req.params;
      try {
        const updatedUser = await Users.findByIdAndUpdate(id, req.body, { new: true });//עדכון לפי מזהה
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
        const deleted = await Users.findByIdAndDelete(id);//מחיקה לפי מזהה
        res.json(deleted);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  };
  
  export default UserController;
  