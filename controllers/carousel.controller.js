
const db = require('../db')
import Cities from "../models/Cities";

class carouselController {
    async getAllSpecPosts(req, res) {
        const allCars = await db.transaction(async () => {
                const cars = new Cities({ name: 'Kazan', car_id: 1});
                await cars.save();
            })
        res.json(allCars.rows)
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = new carouselController

// app.get("/carousel", async (req, res) => {
//     $outer = {"container":"{\"foo\":\"bar\"}"}
//     try {
//       const allTodos = await pool.query("SELECT * FROM carousel");
//       res.json(allTodos.rows);
//     } catch (err) {
//       console.error(err.message);
//     }
//   });

