import Links from "../Models/Links.js";

const LinkController = {
    // redirect: async (req, res) => {

    //     const linkId = req.params._id;
    //     try {
    //         const link = await Links.findById(linkId);
    //         if (link) {
    //             const newClice = {
    //                 insertedAt: new Date(), // הזמן בו בוצע הקליק
    //                 ipAddress: req.ip // כתובת ה-IP של המשתמש
    //             };
    //             link.clicks.push(newClice);
    //             await link.save();

    //             res.redirect(link.originalUrl);
    //         } else {
    //             res.status(500).json({ message: 'Internal Server Error' });

    //         }

    //     } catch (error) {
    //         // בעיה בחיפוש הקישור או בשמירת הקליק
    //         console.error(error);
    //         res.status(500).json({ message: 'Internal Server Error' });
    //     }
    // },

    


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
