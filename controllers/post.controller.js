import db from "../db";
import Cars from "../models/Cars.js";
import Body_Type from "../models/Body_Type";
import Contacts from "../models/Contacts";
import Drive_Unit from "../models/Drive_Unit";
import Photos from "../models/Photos";
import Cities from "../models/Cities";
import Markas from "../models/Markas";
import sequelize, {DataTypes} from "sequelize";
import models from "../models/Models";
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

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

    exports.createOnePost = async (req, res, next) => {
        try {

            let {spec_card, engine, price, color, mileage, year, photo} = req.body
            const CAR_MODEL = {
                spec_card,
                engine,
                price,
                color,
                mileage,
                year,
                Cities: {
                    name: req.body.city
                }
            };
            // const CITY_MODEL = {
            //     name: req.body.city,
            //     car_id: req.body.id
            // }
            try {
                // console.log('Car created');
                const car = await Cars.create(
                    CAR_MODEL
                    ,
                    {include: models.Cities}
                );
                // const cities = await Cities.create(
                //     CITY_MODEL
                // )
                res.send('Good job')
                // return res.status(201).json(car);
            } catch (error) {
                console.log(error)
                return res.status(500).json(error);
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    };
