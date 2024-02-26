import { Button } from "../button/Button";
import cart from "../../assets/shoppingCart.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="bg-black">
      <nav className="flex justify-center text-white cursor-pointer">
        <img />
        <ul className="flex ">
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

          <Link to="/cart">
            <img
              src={cart}
              alt="cart icon"
              style={{ width: "25px", height: "25px" }}
              className="m-4"
            />
          </Link>
        </ul>
      </nav>
    </div>
  );
};
