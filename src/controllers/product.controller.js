// async (req, res)
// async (req, res, next)
// async (err, req, res, next)
// const productService = require("../services/product.service");

// const create = async (req, res, next) => {
//   try {
//     console.log("req.body", req.body);
//     // method POST => req.body
//     const product = {
//       name: req.body.name,
//       quantity: req.body.quantity,
//       price: req.body.quantity,
//       code: req.body.code,
//     };
//     const createProduct = await productService.create(product);
//     if (createProduct) {
//       res.status(201).send({
//         data: product,
//       });
//     } else {
//       throw new Error("Create update");
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({
//       message: "Create fail",
//     });
//   }
// };

// const findById = async (req, res, next) => {
//   const id = req.params.id;
//   const text = req.query.text;
//   console.log("text:::", text);
//   console.log("id:::", id);
//   if (id) {
//     const product = await productService.findById(id);
//     res.status(200).send({
//       data: product,
//     });
//   } else {
//     res.status(500).send({
//       message: "id not exist",
//     });
//   }
// };

// module.exports = {
//   create,
//   findById,
// };
