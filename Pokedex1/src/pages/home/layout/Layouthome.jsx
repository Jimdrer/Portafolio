import React, { useEffect, useState } from "react";
import css from "./layout.module.scss";
import Header from "../header/Header";
import axios from "axios";
import { url_pokemon } from "../../../api/apiRest";
import Card from "../card/Card";

export default function Layouthome() {
  const [arrayPokemon, setArrayPokemon] = useState([]);

  useEffect(() => {
    const api = async () => {
      const apipoke = await axios.get(`${url_pokemon}`);
      setArrayPokemon(apipoke.data.results);
    };
    api();
  }, []);

  return (
    <div className={css.layout}>
      <Header />
      <section>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <div className={css.card_content}>
        {arrayPokemon.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
    </div>
  );
}
