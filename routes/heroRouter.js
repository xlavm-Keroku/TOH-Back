
const express = require('express');
const app = express();
const heroRouter = express.Router();

let hero = require('../models/hero');

heroRouter.route('/add').post((req, res) => {
    let heroInstance = new hero(req.body);
    heroInstance.save().then(heroInstance => {
            res.status(200).json({ 'heroInstance': 'heroInstance is added successfully' });
        })
        .catch(err => {
            res.status(400).send('Unable to add  heroInstance to database');
        });
});

heroRouter.route('/').get((req, res) => {
    hero.find(function(err, heroInstance) {
        if (heroInstance) {
            res.json(heroInstance);
        } else {
            console.log(err);
        }
    });
});

heroRouter.route('/read/:id').get((req, res) => {
    let id = req.params.id;
    hero.findById(id, (err, heroInstance) => {
        res.json(heroInstance);
    });
});

heroRouter.route('/search/:name').get((req, res) => {
    let name = req.params.name;
    hero.find({"name":name} , (err, heroInstance)=> {//como parametro se envia un JSON con el nombre del atributo
          res.json(heroInstance);
      });
});

heroRouter.route('/update/:id').post((req, res) => {
    hero.findById(req.params.id, (err, heroInstance) => {
        if (!heroInstance) {
            return next(new Error('Could not load the document'));
        } else {


            heroInstance .hid=req.body.hid;heroInstance .name=req.body.name;



            heroInstance.save().then(heroInstance => {
                    res.json('Data Updated Successfully');
                })
                .catch(err => {
                    res.status(400).send('Unable to update the database');
                });
        }
    });
});

heroRouter.route('/delete/:id').get((req, res) => {
    let id = req.params.id;
    hero.findByIdAndDelete(id, (err, heroInstance) => {
        if (err) {
            res.json(err)
        } else {
            res.json('Data Removed Successfully');
        }
    });
});



module.exports = heroRouter;

