require("dotenv").config();
const { Sequelize } = require("sequelize");
const PizzaModel = require("./models/pizza");
const OrderModel = require("./models/order");
const ItemsModel = require("./models/orderItem");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pizza`,
  {
    logging: false,
    native: false,
  }
);

// models
PizzaModel(sequelize);
OrderModel(sequelize);
ItemsModel(sequelize);

const { Order, Pizza, OrderItem } = sequelize.models;

// Relations
Order.belongsToMany(Pizza, { through: OrderItem });
Pizza.belongsToMany(Order, { through: OrderItem });

module.exports = {
  conn: sequelize,
};
