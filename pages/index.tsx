import React from "react";
import OrderForm from "../components/OrderForm";

const Home = () => (
  <div>
    <header>
      <img src="/potion.png" />
      <div>
        <h1>Potion Ocean</h1>
        <h2>Fresh ingredients to your door!</h2>
      </div>
    </header>
    <OrderForm />
    <footer>
      Created by Erik Rasmussen –{" "}
      <a href="https://twitter.com/erikras">@erikras</a> –{" "}
      <a href="https://erikras.com">erikras.com</a>
    </footer>
  </div>
);

export default Home;
