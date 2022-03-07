import React, { useState } from "react";
import "./card.css";
import { Button } from "../../components/styled_components/styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon, setFavoritesPokemons }) => {
  const [show, setShow] = useState(true);
  
  const handleLike = (pokemon) => {
    const notify = (name) =>
      toast(name + " to favorite", { position: "bottom-right" });
    notify(pokemon.name);
    setShow(false);
    pokemon.favorite = true;
    setFavoritesPokemons((currents) => [...currents, pokemon]);
  };

  const handleDislike = (pokemon) => {
    const notify = (name) =>
      toast(name + " removed from favorite", { position: "bottom-right" });
    notify(pokemon.name);
    setShow(true);
    pokemon.favorite = false;
    setFavoritesPokemons((currents) =>
      currents.filter((pkm) => pkm.id !== pokemon.id)
    );
  };

  return (
    <>
      {pokemon !== undefined &&  (
        <>
          <Link className="link" to={"/pokedex/" + pokemon.id}>
            <div className="card" data-testid="card">
              <div className="card_section_main">
                <div className="card_img_container">
                  <img src={pokemon.sprites.front_default} alt="" />
                </div>

                <p className="card_text">
                  #{pokemon.id} {pokemon.name}
                </p>
              </div>
              <div className="card_section_info">{pokemon.flavor_text}</div>
            </div>
          </Link>
          <div class="card_button_wrapper">
            {!pokemon.favorite && show == true ? (
              <Button onClick={() => handleLike(pokemon)}>Like</Button>
            ) : (
              <Button onClick={() => handleDislike(pokemon)}>Dislike</Button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PokemonCard;
