import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './pokedex.css'
import { Button, Loader } from "../../components/styled_components/styled";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);
  
  let { id } = useParams();

  useEffect(() => {

    const getPokemonData = async () => {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/` + id).then(async(res) => {
        let pokemon = res.data
        await axios.get(res.data.species.url).then(res =>{
          pokemon.flavor_text=res.data.flavor_text_entries[0].flavor_text
          setPokemon(pokemon)
        })

      });
    };
    getPokemonData();

  


  }, []);

  return (
    <>
      {pokemon!==null ?
        <div className="pokedex">
          <div className="pokedex_main">
            
            <div className="img">
              <img src={pokemon.sprites.front_default} alt="" width={200} />
            </div>
            <div className="wrapper">
            <div className="pokedex_main_info">
               
               <p>0{pokemon.id} - {pokemon.name}</p>

                <p>ht: {pokemon.height}  wh:{pokemon.weight}</p>
             </div>
              {
                pokemon.types.map(type=>{
                  return(
                    <div className="type">
                        <p className="type_text"> {type.type.name}</p>
                    </div>
                    
                  )
                })

              }
            </div>
          </div>
          <Link to={'/pokegrid'}> <Button style={{margin:'0 auto',position:'relative',top:'140px'}}>To grid</Button></Link>

          <div className="pokedex_description">
              <div className="description_wrapper">
                
                 <p>{pokemon.flavor_text}  </p>
              </div>
            
            
          </div>
        </div>
        :
        
        <Loader/>

    
    }
    </>
  );
};

export default Pokedex;
