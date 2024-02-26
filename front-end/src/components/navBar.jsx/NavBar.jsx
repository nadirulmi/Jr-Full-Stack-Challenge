import { Button } from "../button/Button";
import cartLogo from "../../assets/shoppingCart.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";

export const NavBar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className="bg-black">
      <nav className="flex justify-center text-white cursor-pointer">
        <ul className="flex justify-center items-center">
          <li className="m-4 hover:text-yellow-600 hover:font-semibold">
            <Button path="/" text="Home" />
          </li>
          <li className="m-4 hover:text-yellow-600 hover:font-semibold">
            <Button path="/about" text="About" />
          </li>
          <li className="m-4 hover:text-yellow-600 hover:font-semibold">
            <Button path="/products" text="Products" />
          </li>

          <li className="m-4 hover:text-yellow-600 hover:font-semibold">
            <Button path="/orders" text="Orders" />
          </li>

          <Link to="/cart" className="relative inline-block">
            <img
              className="m-4"
              src={cartLogo}
              alt="cart icon"
              style={{ width: "25px", height: "25px", marginRight: "4px" }}
            />
            {cart.length > 0 && (
              <span className="absolute top-0 left-8  bg-yellow-600 rounded px-1 text-white text-xs m-2">
                {cart.length}
              </span>
            )}
          </Link>
        </ul>
      </nav>
    </div>
  );
};
