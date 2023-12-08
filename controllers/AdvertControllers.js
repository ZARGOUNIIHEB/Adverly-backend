const advertSchema = require('../model/Advert');

const addAdvert = async (req, res) => {
    try {
        const newAdvert = new advertSchema(req.body);
        console.log("New Advert", req.body);
        await newAdvert.save();
        res.status(200).json({ msg: 'you added new Advert', newAdvert });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const getAdvertById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const advert = await advertSchema.findById(id);
        res.status(200).json({ msg: 'Advert', advert });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const updateAdvert = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const updatedAdvert = await advertSchema.findByIdAndUpdate(id, { $set: { ...req.body } });
        console.log("Updated Advert", updatedAdvert);
        res.status(200).json({ msg: 'Advert updated', updatedAdvert });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const deleteAdvert = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const deletedAdvert = await advertSchema.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Advert', deletedAdvert });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const getAllAdverts = async (req, res) => {
    try {
        const adverts = await advertSchema.find();
        res.status(200).json({ msg: 'You got all the adverts', adverts });
    } catch (err) {
        console.log(err);
        res.send('error is showing');
    }
}

module.exports = { addAdvert, getAdvertById, updateAdvert, deleteAdvert, getAllAdverts };