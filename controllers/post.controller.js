import db from "../db";
import Cars from "../models/Cars.js";
import Body_Type from "../models/Body_Type";
import Contacts from "../models/Contacts";
import Drive_Unit from "../models/Drive_Unit";
import Photos from "../models/Photos";
import Cities from "../models/Cities";
import Markas from "../models/Markas";
import sequelize from "sequelize";

    exports.getAllPosts = async (req, res, next) => {
        try {
            const ALL = await Cars.findAll({
                include: [{
                    association: 'Photos'
                }]
                // ,{
                //     association: 'Contacts'
                // }]
            });
            res.json(ALL)
            // return res.status(200).json(ALL);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
const photo_ = Photos.belongsTo(Cars, {foreignKey: 'car_id'});
const city_ = Cities.belongsTo(Cars, {foreignKey: 'car_id'});
    exports.createOnePost = async (req, res, next) => {
        try {
            // const CAR_MODEL = {
            //     spec_card: req.body.spec_card,
            //     engine: req.body.engine,
            //     price: req.body.price,
            //     color: req.body.color,
            //     mileage: req.body.mileage,
            //     year: req.body.year
            // };
            try {
                console.log('Car created');
                // const car = await Cars.create(CAR_MODEL, {include:[{association: 'Drive_Unit'},
                //         {association: 'Photos'}, {association: 'Body_Type'}, {association: 'Contacts'},
                //         {association: 'Cities'}, {association: 'Transmission'},
                //         {association: 'Markas', include: [{association: 'Models'}]}]});
                const result = await sequelize.transaction (async(t) => {
                    const cars = Cars.create({
                        spec_card: req.body.spec_card,
                        engine: req.body.engine,
                        price: req.body.price,
                        color: req.body.color,
                        mileage: req.body.mileage,
                        year: req.body.url })

                    const cities_id = Cities.create({
                        name: req.body.city,
                        car_id: cars.id
                    })
                    return {
                        cars,
                        Cities: cities_id
                    }
                })
                // ) .then(data => {
                //     res.json({url: req.body.url, alt: req.body.alt})
                // })

                console.log('city  ' + req.body.city)
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
