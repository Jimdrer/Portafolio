import React, { useEffect, useState } from "react";
import css from "./card.module.scss";
import axios from "axios";
import { url_especies, url_pokemon } from "../../../api/apiRest";

export default function Card({ card }) {
  const [itemPokemon, setItemPokemon] = useState({});
  const [especiePokemon, setEspeciePokemon] = useState({});

  useEffect(() => {
    const dataPokemon = async () => {
      const api = await axios.get(`${url_pokemon}/${card.name}`);
      setItemPokemon(api.data);
      console.log(api);
    };
    dataPokemon();
  }, []);

  useEffect(() => {
    const dataEspecie = async () => {
      const url = card.url.split("/");
      const api = await axios.get(`${url_especies}/${url[6]}`);
      setEspeciePokemon(api.data);
    };
    dataEspecie();
  }, []);
  console.log(itemPokemon);

  return (
    <div className={css.card}>
      <img
        className={css.img_pokemon}
        src={itemPokemon.sprites?.other["official-artwork"].front_default}
        alt="Pokemon"
      />
      <div className={`bg-${especiePokemon.color?.name} ${css.sub_card}`}>
        <strong className={css.id_card}>001</strong>
        <h1 className={css.name_card}>Nombre</h1>
        <h3 className={css.altura}>Altura</h3>
        <h3 className={css.peso}>Peso</h3>
        <h3 className={css.habitat}>Habitat</h3>
        <div className={css.stats}>
          {itemPokemon?.stats?.map((sta, index) => {
            return (
              <h6 key={index} className={css.item_stats}>
                <span className={css.name_stat}> {sta.stat.name} </span>
                <progress className={css.bar_stat} value={sta.base_stat} max={110}></progress>
                <span className={css.num_stat}> {sta.base_stat} </span>
              </h6>
            );
          })}
        </div>
        <div className={css.type_color}>
            {itemPokemon.types?.map((ti,index)=>{
                return(
                    <h6 key={index} className={`color-${ti.type.name} ${css.color_type}`}>
                {" "}
                {ti.type.name}
                {" "}
                </h6>
                )
            })}
        </div>
      </div>
    </div>
  );
}
