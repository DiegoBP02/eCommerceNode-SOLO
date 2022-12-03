const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");
const { getSingleProductReviews } = require("../controllers/reviewController");
const {
  authenticateUser,
  authorizePermissions,
} = require("../utils/authentication");

router
  .route("/")
  .post(authenticateUser, authorizePermissions("admin", "owner"), createProduct)
  .get(authenticateUser, getAllProducts);

router
  .route("/uploadImage")
  .post(authenticateUser, authorizePermissions("admin", "owner"), uploadImage);

router.route("/:id/reviews").get(getSingleProductReviews);

router
  .route("/:id")
  .get(authenticateUser, getSingleProduct)
  .patch(
    authenticateUser,
    authorizePermissions("admin", "owner"),
    updateProduct
  )
  .delete(
    authenticateUser,
    authorizePermissions("admin", "owner"),
    deleteProduct
  );

module.exports = router;
