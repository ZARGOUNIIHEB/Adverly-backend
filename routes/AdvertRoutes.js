const express = require('express');
const advertRoute = express.Router();
const { addAdvert, getAdvertById, getAdvertByUserAdvert, updateAdvert, deleteAdvert, getAllAdverts } = require('../controllers/AdvertControllers');


advertRoute.use(express.json());

//http://localhost:5004/advert/addAdvert
advertRoute.post('/addAdvert', addAdvert);

//http://localhost:5004/advert/getAdvertById/:id
advertRoute.get('/getAdvertById/:id', getAdvertById);

//http://localhost:5004/advert/getAdvertByUserAdvert/:userAdvert
advertRoute.get('/getAdvertByUserAdvert/:userAdvert', getAdvertByUserAdvert);

//http://localhost:5004/advert/updateAdvert/:id
advertRoute.put('/updateAdvert/:id', updateAdvert);

//http://localhost:5004/advert/deleteAdvert/:id
advertRoute.delete('/deleteAdvert/:id', deleteAdvert);

//http://localhost:5004/advert/allAdverts
advertRoute.get('/allAdverts', getAllAdverts);


module.exports = advertRoute;