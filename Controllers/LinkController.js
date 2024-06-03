import Links from "../Models/Links.js";

const LinkController = {
     redirect : async (req, res) => {
        const { id } = req.params;
        const ipAddress = req.ip; // קבלת כתובת ה-IP של המשתמש
        try {
          const link = await Links.findById(id);
          if (!link) {
            return res.status(404).json({ message: 'Link not found' });
          }

          // עדכון מערך הקליקים
          link.clicks.push({ ipAddress });
          await link.save();

          // הפניה לקישור המקורי
          res.redirect(link.originalUrl);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
}
export default LinkController;
