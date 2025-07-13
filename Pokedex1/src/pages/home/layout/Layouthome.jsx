import React, { useEffect, useState } from "react";
import css from "./layout.module.scss";
import Header from "../header/Header";
import axios, { Axios } from "axios";
import * as FaIcons from "react-icons/fa";
import { url_pokemon } from "../../../api/apiRest";
import Card from "../card/Card";

export default function Layouthome() {
  const [arrayPokemon, setArrayPokemon] = useState([]);
  const [globalPokemon, setGlobalPokemon] = useState([]);
  const [xpage, setXpage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const api = async () => {
      const limit = 15;
      const xp = (xpage - 1) * limit;
      const apipoke = await axios.get(
        `${url_pokemon}/?offset=${xp}&limit=${limit}`
      );
      setArrayPokemon(apipoke.data.results);
    };
    api();
    getGlobalPokemon();
  }, [xpage]);
  const getGlobalPokemon = async () => {
    const res = await axios.get(`${url_pokemon}?offset=0&limit=1000`);
    const promises = res.data.results.map((pokemon) => {
      return pokemon;
    });

    const results = await Promise.all(promises);
    setGlobalPokemon(results);
  };

  const filtro = search.length > 0 
  ? globalPokemon.filter(pokemon => pokemon?.name?.includes(search)) : arrayPokemon

  const busqueda = (e) => {
    const texto = e.toLowerCase();
    setSearch(texto);
    setXpage(1);
  };

  return (
    <div className={css.layout}>
      <Header busqueda={busqueda} />
      <section className={css.paginacion}>
        <div className={css.div_paginacion}>
          <span
            className={css.flecha_izq}
            onClick={() => {
              if (xpage == 1) {
                return console.log("No se puede retroceder");
              }
              setXpage(xpage - 1);
            }}>
            <FaIcons.FaAngleLeft />
          </span>
          <span className={css.item}> {xpage} </span>
          <span className={css.item}>DE</span>
          <span className={css.item}>
            {" "}
            {Math.round(globalPokemon?.length / 15)}
          </span>
          <span
            className={css.flecha_der}
            onClick={() => {
              if (xpage == 67) {
                return console.log("No se puede retroceder");
              }
              setXpage(xpage + 1);
            }}>
            <FaIcons.FaAngleRight />
          </span>
        </div>
      </section>
      <div className={css.card_content}>
        {filtro.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
      <section className={css.paginacion}>
        <div className={css.div_paginacion}>
          <span className={css.flecha_izq}>
            <FaIcons.FaAngleLeft />{" "}
          </span>
          <span className={css.item}> {xpage} </span>
          <span className={css.item}>DE</span>
          <span className={css.item}>
            {" "}
            {Math.round(globalPokemon?.length / 15)}{" "}
          </span>
          <span
            className={css.flecha_der}
            onClick={() => {
              if (xpage == 67) {
                return console.log("No se puede retroceder");
              }
              setXpage(xpage + 1);
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              });
            }}>
            <FaIcons.FaAngleRight />
          </span>
        </div>
      </section>
    </div>
  );
}
