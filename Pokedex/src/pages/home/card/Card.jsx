import React, { useEffect, useState } from "react";
import css from "./card.module.scss";
import axios from "axios";
import { url_pokemon } from "../../../api/apiRest";

export default function Card({ card }) {

    const [itemPokemon, setItemPokemon] = useState({})

   useEffect(() => {
    const dataPokemon = async ()=>{
        const api = await axios.get(`${url_pokemon}/${card.name}`)
        setItemPokemon(api.data)
        console.log(api)
    }
    dataPokemon()
   }, [])
   
    

  console.log(card);
  return (
    <div>
      Tarjetas
      <img src={itemPokemon?.sprites?.other["official-artwork"].front_default} alt="Pokemon" />
    </div>
  );
}
