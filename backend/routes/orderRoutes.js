const express = require("express");
const {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
  getOrders,
} = require("../controllers/orderController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

module.exports = router;
