import chef from "../../assets/pizzaChef.jpg";
import pizza from "../../assets/pizzaImage.avif";
export const About = () => {
  return (
    <div>
      <h1 className="text-6xl text-white text-center m-8">
        ABOUT <span className="text-yellow-600">US</span>
      </h1>
      <section className="bg-yellow-600 flex justify-center items-center m-6 rounded-lg">
        <div className="m-6 w-4/5">
          <h2 className="text-6xl m-5">What make our food special?</h2>
          <p className="m-6 text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            commodi numquam, a est quae esse laboriosam fuga ratione. Quas eos
            natus tempore sapiente a temporibus ipsam, earum obcaecati
            repudiandae est?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid commodi numquam, a est quae esse laboriosam f
          </p>
        </div>
        <div className="w-2/5">
          <img src={chef} className="rounded-r-lg"/>
        </div>
      </section>
      <section className="bg-yellow-600 flex  flex-row-reverse justify-center items-center m-6 rounded-lg">
        <div className="m-6 w-4/5">
          <h2 className="text-6xl m-5 text-end">Why choose us?</h2>
          <p className="m-6 text-end text-white/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            commodi numquam, a est quae esse laboriosam fuga ratione. Quas eos
            natus tempore sapiente a temporibus ipsam, earum obcaecati
            repudiandae est?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid commodi numquam, a est quae esse laboriosam f
          </p>
        </div>
        <div className="w-2/5">
          <img className="rounded-l-lg" src={pizza} />
        </div>
      </section>
    </div>
  );
};
