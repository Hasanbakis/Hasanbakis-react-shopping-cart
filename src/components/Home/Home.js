import React from "react";
import lists from "../../data";
import "./Home.css";
import Cards from "../Cards/Cards";

const Home = (props) => {
  return (
    <section>
      {lists.filter((product) => product.title.toLowerCase().includes(props.item)).map((product) => (
          <Cards
            key={product.id}
            product={product}
            handleClick={props.handleClick}
          />
        ))}
    </section>
  );
};

export default Home;
