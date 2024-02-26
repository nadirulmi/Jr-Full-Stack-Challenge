import { useContext } from "react";
import { dataContext } from "../context/DataContext";

export const TotalCart = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, prod) => acc + prod.price, 0);

  return (
    <div>
      <h3 className="font-bold text-3xl">Total: ${total}</h3>
    </div>
  );
};
