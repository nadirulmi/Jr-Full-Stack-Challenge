let pizzaOrders = [];

const postOrders = (req, res) => {
  try {
    const { pizzas, totalPrice, id } = req.body;

    if (!Array.isArray(pizzas) || pizzas.length === 0)
      throw new Error("Invalid pizzas data");

    if (typeof totalPrice !== "number") {
      throw new Error("Invalid totalPrice");
    }

    pizzas.forEach((pizza) => {
      const { name, ingredients, price } = pizza;
      if (!name || !Array.isArray(ingredients) || isNaN(price)) {
        throw new Error("Invalid pizza data");
      }

      pizza.ingredients = ingredients.toString();
    });

    const order = {
      id,
      pizzas,
      totalPrice,
    };

    pizzaOrders.push(order);

    res.status(201).json({
      message: `Order created successfully. Order number: ${id}`,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { postOrders, pizzaOrders };
