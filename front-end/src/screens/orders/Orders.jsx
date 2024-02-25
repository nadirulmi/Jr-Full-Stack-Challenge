import { useContext, useEffect, useState } from "react";
import { dataContext } from "../../components/context/DataContext";
import { orderData } from "../../api";

export const Orders = () => {
  const { orderIdCounter } = useContext(dataContext);
  const [order, setOrder] = useState(null);
  const lastOrderId = orderIdCounter - 1;

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const orderResponse = await orderData(lastOrderId);
        setOrder(orderResponse.data);
      } catch (error) {
        throw Error(error);
      }
    };

    fetchOrderData();
  }, []);

  return (
    <div className="flex justify-center items-center m-10">
      {order && (
        <div className="bg-white p-6 rounded-lg">
          <h1 className="text-center text-5xl font-semibold text-yellow-700">
            Thanks for your purchase! 🍕
          </h1>
          <div className="mt-5 text-xl">
            <p>Your order number: {order.id}</p>
            <p>Pizzas:</p>
            <ul>
              {order.pizzas.map((pizza, index) => (
                <li key={index}>
                  Name: {pizza.name}, Price: ${pizza.price}
                  {pizza.ingredients && (
                    <span>, Ingredients: {pizza.ingredients}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-5 text-center text-xl">
            Total Price:{" "}
            <span className="text-green-800 font-bold text-2xl">
              ${order.totalPrice}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
