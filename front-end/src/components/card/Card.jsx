import { Link } from "react-router-dom";
import { dataContext } from "../context/DataContext";
import { useContext } from "react";

const Card = (pizza) => {
  const { cart, setCart } = useContext(dataContext);

  const buyProducts = (pizza) => {
    setCart([...cart, pizza]);
  };

  return (
    <div className="m-5 border-2 border-white rounded-lg bg-white p-4 text-center  shadow-black shadow-lg">
      <Link to={`/detail/${pizza.id}`}>
        <h2 className="text-2xl m-2">{pizza.name}</h2>
      </Link>
      <p className="m-2 font-semibold text-xl text-green-700">${pizza.price}</p>
      <img
        src={pizza.image}
        width={200}
        className="m-2 drop-shadow-2xl"
        alt="pizza picture"
      />
      <button
        className="m-4 py-1 px-8 bg-yellow-600 rounded hover:bg-black hover:text-yellow-600 hover:font-semibold font-semibold cursor-pointer"
        onClick={() => buyProducts(pizza)}
      >
        Order
      </button>
    </div>
  );
};

export default Card;
