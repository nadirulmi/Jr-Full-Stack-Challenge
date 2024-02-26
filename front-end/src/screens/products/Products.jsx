import { useContext } from "react";
import Card from "../../components/card/Card";
import pizzaImage from "../../assets/pizzaImg.png";
import { dataContext } from "../../components/context/DataContext";

export const Products = () => {
  const { data } = useContext(dataContext);

  return (
    <div>
      <section>
        <h1 className="text-center font-semibold text-6xl text-white m-8">
          OUR <span className="text-yellow-600 font-bold">PRODUCTS</span>
        </h1>
      </section>
      <section>
        <div className="flex m-6 flex-wrap justify-center items-center">
          {data.map((pizza) => (
            <Card
              key={pizza.name}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              image={pizzaImage}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
