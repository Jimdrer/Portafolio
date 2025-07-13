import React, { useEffect, useState } from "react";
import css from "./card.module.scss";
import axios from "axios";
import {
  url_especies,
  url_evoluciones,
  url_pokemon,
} from "../../../api/apiRest";

export default function Card({ card }) {
  const [itemPokemon, setItemPokemon] = useState({});
  const [especiePokemon, setEspeciePokemon] = useState({});
  const [evoluciones, setEvoluciones] = useState([]);

  useEffect(() => {
    const dataPokemon = async () => {
      const api = await axios.get(`${url_pokemon}/${card.name}`);
      setItemPokemon(api.data);
    };
    dataPokemon();
  }, [card]);
  
  useEffect(() => {
    const dataEspecie = async () => {
      const url = card.url.split("/");
      const api = await axios.get(`${url_especies}/${url[6]}`);
      setEspeciePokemon({
        url_especie: api?.data?.evolution_chain,
        data: api?.data,
      });
    };
    dataEspecie();
  }, [card]);
  
  useEffect(() => {
    async function getPokemonImagen(id) {
      const response = await axios.get(`${url_pokemon}/${id}`);
      return response?.data?.sprites?.other["official-artwork"]?.front_default;
    }
    
    const arrayEvoluciones = [];
    
    if (especiePokemon?.url_especie) {
      const obtenerEvoluciones = async () => {
        const arrayEvoluciones = [];
        const url = especiePokemon.url_especie.url.split("/");
        const api = await axios.get(`${url_evoluciones}/${url[6]}`);
        const url2 = api.data.chain.species.url.split("/");
        const img1 = await getPokemonImagen(url2[6]);
        arrayEvoluciones.push({
          img: img1,
          name: api.data.chain.species.name,
        });
        
        if (api.data.chain.evolves_to.length != 0) {
          const data2 = api.data.chain.evolves_to[0].species;
          const ID = data2.url.split("/");
          const img2 = await getPokemonImagen(ID[6]);
          
          arrayEvoluciones.push({
            img: img2,
            name: data2.name,
          });
          
          if (api.data.chain.evolves_to[0].evolves_to.length != 0) {
            const data3 = api.data.chain.evolves_to[0].evolves_to[0].species;
            const ID = data3.url.split("/");
            const img3 = await getPokemonImagen(ID[6]);
            
            arrayEvoluciones.push({
              img: img3,
              name: data3.name,
            });
          }
        }
        setEvoluciones(arrayEvoluciones);
      };
      obtenerEvoluciones();
    }
  }, [especiePokemon]);

  let pokeId = itemPokemon.id?.toString();

  if (pokeId?.length == 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId?.length == 2) {
    pokeId = "0" + pokeId;
  }

  return (
    <div className={css.card}>
      <img
        className={css.img_pokemon}
        src={itemPokemon.sprites?.other["official-artwork"].front_default}
        alt="Pokemon"
      />
      <div className={`bg-${especiePokemon.data?.color?.name} ${css.sub_card}`}>
        <strong className={css.id_card}>{pokeId}</strong>
        <strong className={css.name_card}>{" "}{itemPokemon.name}</strong>
        <h3 className={css.altura}>Altura:{itemPokemon.height}0 Cm</h3>
        <h3 className={css.peso}>Peso: {itemPokemon.weight} Kg</h3>
        <h3 className={css.habitat}>Habitat: {especiePokemon.data?.habitat?.name}</h3>
        <div className={css.stats}>
          {itemPokemon?.stats?.map((sta, index) => {
            return (
              <h6 key={index} className={css.item_stats}>
                <span className={css.name_stat}> {sta.stat.name} </span>
                <progress
                  className={css.bar_stat}
                  value={sta.base_stat}
                  max={110}></progress>
                <span className={css.num_stat}> {sta.base_stat} </span>
              </h6>
            );
          })}
        </div>
        <div className={css.type_color}>
          {itemPokemon.types?.map((ti, index) => {
            return (
              <h6
                key={index}
                className={`color-${ti.type.name} ${css.color_type}`}>
                {ti.type.name}
              </h6>
            );
          })}
        </div>
        <div className={css.div_evo}>
          {evoluciones.map((evo,index) => {
            return (
              <div key={index} className={css.item_evo}>
                <img src={evo.img} alt="" className={css.img}/>
                <h6>{evo.name}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
