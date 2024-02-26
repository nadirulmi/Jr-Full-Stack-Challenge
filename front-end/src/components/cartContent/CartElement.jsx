import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import { TotalCart } from "./TotalCart";
//images/icons
import pizzaGif from "../../assets/pizza-gif.gif";
import deleteIcon from "../../assets/delete.png";

export const CartElement = () => {
  const {
    cart,
    removeFromCart,
    total,
    handlePlaceOrder,
    handleIngredientToggle,
  } = useContext(dataContext);

  const handleRemoveFromCart = (productName) => {
    removeFromCart(productName);
    console.log(productName);
  };
  console.log("total:" + total);

  return (
    <div className="flex justify-center mt-8">
      <section>
        {cart.map((product) => (
          <div className="bg-white m-4 justify-between rounded-lg px-4 py-4 shadow-yellow-600/20 shadow-lg">
            <div className="flex justify-end text-end">
              <button
                className="bg-red-600 hover:bg-red-700 p-1 rounded-md"
                onClick={() => handleRemoveFromCart(product.name)}
              >
                {<img src={deleteIcon} alt="delete icon" className="w-5 h-5" />}
              </button>
            </div>
            <div className="flex">
              <img src={product.image} width={200} alt="pizza picture" />
              <div className="flex flex-col justify-center ml-10 items-end">
                <h1 className="text-xl m-2">{product.name}</h1>
                <p className="m-2 font-semibold text-xl text-green-700">
                  ${product.price}
                </p>
                {product?.ingredients?.map((ingred, index) => (
                  <div key={index}>
                    <label>{ingred}</label>
                    <input
                      type="checkbox"
                      className="ml-2 cursor-pointer"
                      id={`ingredient-${index}`}
                      onChange={() => handleIngredientToggle(ingred)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      {cart.length > 0 ? (
        <section className="bg-yellow-600 w-1/5 m-4 rounded-lg shadow-yellow-600/20 shadow-lg flex flex-col justify-center items-center">
          <TotalCart />
          <button
            className="m-4 py-1 px-8 bg-black text-white rounded font-semibold cursor-pointer"
            onClick={handlePlaceOrder}
          >
            Order
          </button>
        </section>
      ) : (
        <section
          style={{ backgroundColor: "#F5F4E1" }}
          className="w-full flex flex-col justify-center items-center m-8 rounded-lg lg:flex-row"
        >
          <div>
            <p className="text-center text-4xl text-red-900">
              Your cart is empty
            </p>
          </div>
          <img src={pizzaGif} className="w-full lg:w-2/5" alt="pizza gif" />
        </section>
      )}
    </div>
  );
};
