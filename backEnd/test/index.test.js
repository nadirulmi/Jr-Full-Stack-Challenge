const { getPizzas } = require("../src/controllers/getPizzas");
const { server } = require("../src/app");
const session = require("supertest");
const agent = session(server);

describe("getPizzas controller", () => {
  it("It should be a function", () => {
    expect(typeof getPizzas).toBe("function");
  });
});

describe("GET /api/pizza", () => {
  it("Response status: 200", async () => {
    const response = await agent.get("/api/pizza");
    expect(response.status).toBe(200);
  });

  it("Responds with an array of objects", async () => {
    const response = await agent.get("/api/pizza");
    expect(Array.isArray(response.body)).toBe(true);

    response.body.forEach((item) => {
      expect(typeof item).toBe("object");
    });
  });
});

describe("POST /api/orders", () => {
  it("Responds with a success message and adds the order to the orders list", async () => {
    const validOrder = {
      id: 100,
      pizzas: [
        { name: "Pizza 1", price: 10, ingredients: ["cheese", "tomato"] },
        { name: "Pizza 2", price: 12, ingredients: ["cheese", "pepperoni"] },
      ],
      totalPrice: 22,
    };

    const response = await agent.post("/api/orders").send(validOrder);

    expect(response.status).toBe(201);

    expect(response.body.message).toEqual(
      expect.stringContaining("Order created successfully")
    );
  });
});


  

