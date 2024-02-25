const { Router } = require("express");
const { getPizzas } = require("../controllers/getPizzas");
const { postOrders } = require("../controllers/postOrders");
const { getOrderByID } = require("../controllers/getOrderById");

const router = Router();

router.get("/pizza", getPizzas);
router.post("/orders", postOrders)
router.get("/orders/:id", getOrderByID)

module.exports = router;
