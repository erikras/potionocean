import React from "react";
import OrderForm from "../components/OrderForm";
import Image from "next/image";

const Home = () => (
  <div>
    <header>
      <Image src="/potion.png" height={80} width={80} />
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
