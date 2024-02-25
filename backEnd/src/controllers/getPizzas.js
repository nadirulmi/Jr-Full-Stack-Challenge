const pizzaData = require("../../example-pizzas.json");

const getPizzas = (req, res) => res.status(200).json(pizzaData);

module.exports = { getPizzas };
