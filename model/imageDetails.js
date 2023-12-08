const mongoose = require("mongoose");

const ImageDetailsScehma = new mongoose.Schema(
    {
        imageUser: String
    },
    {
        collection: "ImageDetails",
    }
);

mongoose.model("ImageDetails", ImageDetailsScehma);