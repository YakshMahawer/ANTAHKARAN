const router = require("express").Router();
const Admin = require("../models/admin");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// router.post("/register", async (req, res) => {

//     const newAdmin = new Admin({
//         email: req.body.email,
//         password: CryptoJS.AES.encrypt(req.body.password, "mynameisyash").toString(),
//     });

//     try {
//         const savedAdmin = await newAdmin.save();
//         res.status(201).json(savedAdmin);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.post("/login", async (req, res) => {
    try {
        const adminlogin = await Admin.findOne({ email: req.body.email });
        !adminlogin && res.status(401).json("Wrong Cradentials");

        const hashedpassword = CryptoJS.AES.decrypt(adminlogin.password, "mynameisyash");
        const originalpassword = hashedpassword.toString(CryptoJS.enc.Utf8);
 
        originalpassword !== req.body.password &&
         res.status(401).json("Wrong Cradentials");

        const accesstoken = jwt.sign(
            {
                id: adminlogin._id,
            },
            "mynameisyash",
            {expiresIn: "3d"}
        );
       // const { password, ...others } = user_.doc;
        res.status(200).json("password matched");
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;