import db from "../db";
import Cars from "../models/Cars.js";
import Body_Type from "../models/Body_Type";
import Contacts from "../models/Contacts";
import Drive_Unit from "../models/Drive_Unit";
import Photos from "../models/Photos";
import Cities from "../models/Cities";
import Markas from "../models/Markas";

    exports.getAllPosts = async (req, res, next) => {
        try {
            const ALL = await Cars.findAll({
                include: [{
                    association: 'Cities'
                },{
                    association: 'Contacts'
                }]
            });
            res.json(ALL)
            // return res.status(200).json(ALL);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    exports.createOnePost = async (req, res, next) => {
        try {
            const CAR_MODEL = {
                spec_card: req.body.spec_card,
                engine: req.body.engine,
                price: req.body.price,
                color: req.body.color,
                mileage: req.body.mileage,
                year: req.body.year
            };
            try {
                console.log('Car created');
                // const car = await Cars.create(CAR_MODEL, {include:[{association: 'Drive_Unit'},
                //         {association: 'Photos'}, {association: 'Body_Type'}, {association: 'Contacts'},
                //         {association: 'Cities'}, {association: 'Transmission'},
                //         {association: 'Markas', include: [{association: 'Models'}]}]});
                const car = await Cars.create(CAR_MODEL, 'photo': {
                    'url': req.body.url,
                        'alt': req.body.alt,
                        column3: 'string',
                })
                console.log(car)
                res.send('Good job')
                // return res.status(201).json(car);
            } catch (error) {
                return res.status(500).json(error);
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    };
