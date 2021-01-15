const Hero = require('../models/hero.model.js');


exports.create = async (req, res) => {
    Hero.findById(req.body.id, (err, result) => {
        if (result) {
            res.json('The Hero Already Exists in the DB')
        } else {
            const hero = new Hero(req.body);
            hero.save().then(result => {
                if (result) {
                    res.json('Hero Created Successfully!');
                } else {
                    res.json('There was an Error Creating the Hero')
                }
            })
        }
    });
};

exports.update = async (req, res) => {
    Hero.findById(req.params.id, (err, result) => {
        if (!result) {
            res.json('There is no hero with that ID');
        } else {

            result.client = req.body.client;
            result.comment = req.body.comment;

            result.save().then(result => {
                if (result) {
                    res.json('Hero Update Successfully!');
                } else {
                    res.json('There was an Error Modifying the Hero')
                }
            })
        }
    });
};

exports.delete = async (req, res) => {
    Hero.findByIdAndDelete(req.params.id, (err, result) => {
        if (result) {
            res.json('Hero Remove Successfully!')
        } else {
            res.json('The Hero Does Not Exist in the DB');
        }
    });
};

exports.findAll = async (req, res) => {
    Hero.find(function (err, result) {
        if (result) {
            res.json(result);
        } else {
            res.json('No heros')
        }
    });
};


exports.findOne = async (req, res) => {
    var id = req.params.id;
    Hero.findById(id, (err, result) => {
        if (result) {
            res.json(result)
        } else {
            res.json('The Hero Does Not Exist in the DB')
        }
    });
};