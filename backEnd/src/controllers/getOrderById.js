const { pizzaOrders } = require("./postOrders");

const getOrderByID = (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Missing ID parameter");
    }

    const order = pizzaOrders.find((order) => order.id == id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getOrderByID };
