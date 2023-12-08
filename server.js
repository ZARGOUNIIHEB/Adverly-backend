const express = require("express");
const ConnectDb = require('./config/ConnectDb');
const cors = require('cors');
const mongoose = require('mongoose');


const userRoute = require('./routes/UserRoutes');

const advertRoute = require('./routes/AdvertRoutes');

require('dotenv').config();

const app = express();

const port = 5004;

ConnectDb();

app.use(cors());
app.use(express.json());

//// Zone multer //////////
// require("./model/imageDetails");
// const Images = mongoose.model("ImageDetails");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../frontend/public/images");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

const upload = multer({ storage: storage });



app.post("/upload-image", upload.single("imageUser"), async (req, res) => {
    try {
        const imageName = req.file.filename;
        const neededImage = imageName.toString();
        res.send(`${neededImage}`);
    } catch {

    }
});







//// Zone Multer /////////

//Route principale pour les utilisateurs
app.use('/user', userRoute);
// //Route principale pour les annonces 
app.use('/advert', advertRoute);


app.listen(port, (err) =>
    err ? console.log(err) : console.log(`You are connected successfully to the port ${port}`));