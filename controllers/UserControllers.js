const userSchema = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const getAllUsers = async (req, res) => {
    try {
        const users = await userSchema.find();
        res.status(200).json({ msg: 'You got all the users', users });
    } catch (err) {
        console.log(err);
        res.send('error is showing');
    }
}

const addUser = async (req, res) => {
    try {
        const newUser = new userSchema(req.body);
        console.log("New User", req.body);
        await newUser.save();
        res.status(200).json({ msg: 'you added new User', newUser });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const user = await userSchema.findById(id);
        res.status(200).json({ msg: 'User', user });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const updatedUser = await userSchema.findByIdAndUpdate(id, { $set: { ...req.body } });
        console.log("Updated User", updatedUser);
        res.status(200).json({ msg: 'User updated', updatedUser });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const deletedUser = await userSchema.findByIdAndDelete(id);
        res.status(200).json({ msg: 'User', deletedUser });
    } catch (err) {
        console.log(err);
        res.send('You have a problem');
    }
};

const signUp = async (req, res) => {
    try {
        //envoi du Data
        const { firstName, lastName, role, age, phone, email, password } = req.body;
        const found = await userSchema.findOne({ email });
        if (found) {
            return res.json({ msg: 'Already registered' })
        }
        const newUser = await new userSchema(req.body);
        // l'utilisation de bcrypt
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        newUser.password = hash;
        newUser.save();
        res.status(200).json({ msg: 'Welcome' });
    } catch (err) {
        console.log(err);
    }
}

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const found = await userSchema.findOne({ email });
        console.log(found);
        if (!found) { return res.json({ msg: 'Email not found' }) };
        const match = bcrypt.compare(password, found.password);
        if (!match) { return res.json({ msg: 'False password' }) };
        // Partie Token
        const payload = { id: found._id };
        var token = jwt.sign(payload, process.env.privateKey);
        res.json({ msg: 'you are welcome SignIn ', found, token });
        console.log('Logged in to your session successfully', email, password);
    } catch (err) {
        console.log(err);
    }
}



module.exports = { getAllUsers, addUser, getUserById, updateUser, deleteUser, signUp, signIn };