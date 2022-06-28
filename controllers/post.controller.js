const Cities = require('../models/Cities');
const Cars = require('../models/Cars');
const Photos = require('../models/Photos');
const Drive_Unit = require('../models/Drive_Unit');
const Body_Type = require('../models/Body_Type');
const Transmission = require('../models/Transmission');
const Contacts = require('../models/Contacts');
const Make = require('../models/Make');
const Model = require('../models/Models');
const uuid = require("uuid");


    exports.getAllPosts = async (req, res, next) => {
        try {
            const ALL = await Cars.findAll({
                include: [
                    { association: 'photo'},
                    { association: 'city' },
                    { association: 'body_type' },
                    { association: 'contact' },
                    { association: 'drive_unit' },
                    { association: 'make' },
                    { association: 'model' },
                    { association: 'transmission' }
                ],
                order: [
                    ['id', 'ASC'],
                ]
            }
         );
            console.log(ALL)
            res.json(ALL)
            // return res.status(200).json(ALL);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    exports.createOnePost = async (req, res, next) => {
        try {
            let {spec_card, engine, price, color, mileageKm, year, description} = req.body
            const Car_id = uuid.v4()
            try {
                var parsingPhoto = req.body.photo
                var parsingContacts = req.body.contact
                var ParsedPhoto = JSON.parse(JSON.stringify(parsingPhoto));
                var ParsedContacts = JSON.parse(JSON.stringify(parsingContacts));
                const car = await Cars.create({
                    id: Car_id,
                    spec_card,
                    engine,
                    price,
                    color,
                    mileageKm,
                    year,
                    description,
                  }
                );

                Cities.create({
                    //not null violation
                    // id: req.body.id,
                    name: req.body.city,
                    car_id: Car_id
                });
                Body_Type.create({
                    //not null violation
                    // id: req.body.id,
                    name: req.body.body_type,
                    car_id: Car_id
                });
                Drive_Unit.create({
                    //not null violation
                    // id: req.body.id,
                    name: req.body.drive_unit,
                    car_id: Car_id
                });
                Transmission.create({
                    //not null violation
                    // id: req.body.id,
                    name: req.body.transmission,
                    car_id: Car_id
                })
                Make.create({
                    //not null violation
                    // id: req.body.id,
                    name: req.body.make,
                    car_id: Car_id
                })
                Model.create({
                    //create association with make
                    //not null violation
                    // id: req.body.id,
                    name: req.body.model,
                    car_id: Car_id
                })
                Contacts.create({
                    //not null violation
                    // id: req.body.id,
                    name: ParsedContacts.name,
                    mobile: ParsedContacts.mobile,
                    email: ParsedContacts.email,
                    car_id: Car_id
                })

                ParsedPhoto.forEach(photo =>
                    Photos.create({
                        // id: photo.id,
                        url: photo.url,
                        alt: photo.alt,
                        car_id: Car_id
                        })
                    )
                console.log(car)
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

