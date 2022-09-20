import { useEffect, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import people from "./data";

import "./style/style.css";

function App() {
  const [data, setData] = useState(people);
  const [index, setIndex] = useState(0);

  const prevButton = () => {
    setIndex((previousIndex) => {
      let newIndex = previousIndex + 1;

      if (newIndex < 0) {
        index = data.length - 1;
      }
      return newIndex;
    });
  };
  const nextButton = () => {
    setIndex((previousIndex) => {
      let newIndex = previousIndex - 1;

      if (newIndex > data.length - 1) {
        index = 0;
      }
      return newIndex;
    });
  };

  return (
    <main className="main">
      <section className="review__title">
        <h1 className="review__heading">Reviews</h1>
        <section className="review__card--container">
          {data.map((ele, personIndex) => {
            const { id, image, name, title, quote } = ele;
            let position = "active";
            if (personIndex === index) {
              position = "next";
            }

            if (
              personIndex == index - 1 ||
              (index === 0 && personIndex === data.length - 1)
            ) {
              position = "last";
            }

            return (
              <article className={`review__card   ${position}`} key={id}>
                <img
                  src={image}
                  alt="review__image"
                  className="review__image"
                />
                <h2 className="review__name">{name}</h2>
                <h3 className="review__title">{title}</h3>
                <p className="review__quote">{quote}</p>
                <article className="review__btn--group">
                  <button
                    className="btn btn__left"
                    onClick={() => prevButton()}
                  >
                    <FaAngleDoubleLeft />
                  </button>
                  <button
                    className="btn btn__right"
                    onClick={() => nextButton()}
                  >
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
