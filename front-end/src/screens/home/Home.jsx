import pizzaImage from "../../assets/pizza.jpg";
import { Orders } from "../orders/Orders";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <section
        className=" image flex flex-col items-center text-cyan-50 w-full justify-center overflow-hidden h-screen"
        style={{
          backgroundImage:
            "url('https://i.blogs.es/fff4ca/pizzas/1366_2000.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "calc(100vh - 56px)",
        }}
      >
        <h1
          className="font-bold text-7xl lg:text-8xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}
        >
          The <span className="text-yellow-600">best</span> pizza in the world
        </h1>
        <Link to="/about">
          <button className="m-6 border-2 border-yellow-600 py-1 px-8 bg-yellow-600 rounded hover:bg-black hover:text-yellow-600 hover:font-semibold font-semibold">
            About us
          </button>
        </Link>
      </section>
    </div>
  );
};
