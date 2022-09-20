import { useEffect, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import people from "./data";

import "./style/style.css";

function App() {
  const [data, setData] = useState(people);

  return (
    <main>
      <section className="review__title">
        <h1 className="review__heading">Reviews</h1>
        <section className="review__card-container">
          {data.map((ele) => {
            const { id, image, name, title, quote } = ele;
            return (
              <article className="review__card" key={id}>
                <img
                  src={image}
                  alt="review__image"
                  className="review__image"
                />
                <h2 className="review__name">{name}</h2>
                <h3 className="review__title">{title}</h3>
                <p className="review__quote">{quote}</p>
                <article className="review__btn--group">
                  <button className="btn btn__left">
                    <FaAngleDoubleLeft />
                  </button>
                  <button className="btn btn__right">
                    <FaAngleDoubleRight />
                  </button>
                </article>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
