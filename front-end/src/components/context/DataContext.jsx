import { createContext, useEffect, useState } from "react";
import { getPizzas, placeOrder } from "../../api";
import Swal from "sweetalert2";

export const dataContext = createContext();
const DataProvider = ({ children }) => {
  //local storage
  const saveCart = JSON.parse(localStorage.getItem("cart")) || [];
  const saveId = JSON.parse(localStorage.getItem("id") || 100);
  //states
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(saveCart);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [orderIdCounter, setOrderIdCounter] = useState(saveId);

  const total = cart.reduce((acc, prod) => acc + prod.price, 0);

  const removeFromCart = (productName) => {
    const updatedCart = cart.filter((item) => item.name !== productName);
    setCart(updatedCart);
  };

  const handleIngredientToggle = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredient)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        id: orderIdCounter,
        pizzas: cart.map((product) => ({
          name: product.name,
          price: product.price,
          ingredients: selectedIngredients,
        })),
        totalPrice: total,
      };

      const orderResponse = await placeOrder(orderData);

      Swal.fire({
        title: "Orden created",
        text: orderResponse.message,
      });
      setOrderIdCounter((prevCounter) => prevCounter + 1);
      setCart([]);
      setSelectedIngredients([]);
    } catch (error) {
      throw Error(error.message);
    }
  };

  useEffect(() => {
    //local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("id", JSON.stringify(orderIdCounter));

    const fetchData = async () => {
      try {
        const pizzasData = await getPizzas();
        setData(pizzasData);
      } catch (error) {
        throw new Error("Error fetching pizzas: " + error.message);
      }
    };

    fetchData();
  }, [cart, orderIdCounter]);

  return (
    <dataContext.Provider
      value={{
        data,
        cart,
        setCart,
        removeFromCart,
        total,
        handlePlaceOrder,
        handleIngredientToggle,
        orderIdCounter,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
export default DataProvider;
