require("../models/database");
const Category = require("../models/Category");

/**
 * GET/
 * Homepage
 */
exports.homepage = async (req, res) => {
  try {

    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);

    res.render("index", {title: 'speed food', categories});
  }catch (error){
      res.satus(500).send({message: error.message || "Error Occured"});
  }
};

// async function insertDymmyCategoryData() {
//   try {
//     await Category.insertMany(
//         [
//             { name: "Burgers", image: ".png" },
//             { name: "Pizzas", image: ".png" },
//             { name: "Appetizers", image: ".png" },
//             { name: "Drinks", image: ".png" },
//             { name: "Sweet", image: ".png" },
//           ]
//     );
//   } catch (error) {
//     console.log("error", +error);
//   }
// }

// insertDymmyCategoryData();
