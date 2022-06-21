import Cars from "../models/Cars.js";
import db from "../db";
import Cities from "../models/Cities";

//
// router.get('/post', (res, req) => Gig.findAll()
// 	.then(gigs => {
// 		console.log(gigs);
// 		send.status(200);
// 	})
// 	.catch(err => console.log(err)));

// class postController {
    // async getAllPosts(req, res) {
    //     try {
    //
    //         const allCars = await db.query("SELECT spec_card, city, marka, model, engine, year, price, transmission, drive_unit, body_type, color, mileage, \
	// 										json_agg(photo.*) as PHOTO \
	// 										FROM cars JOIN photo ON photo.car_id = cars.id \
	// 										GROUP BY 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12")
    //         res.json(allCars.rows)
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // }
    //
    exports.getAllPosts = async (req, res, next) => {
        try {
            const ALL = await Cars.findAll();
            res.json(ALL)
            // return res.status(200).json(ALL);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
// }

// module.exports = new postController

