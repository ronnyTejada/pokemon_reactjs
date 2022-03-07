import axios from "axios";
import React, { useEffect, useState,createContext, useContext } from "react";
import PokemonCard from "../../components/card/PokemonCard";
import { Button, Loader, Input, Filter,Wrapper } from "../../components/styled_components/styled";
import Suggestions from "../../components/suggestions/Suggestions";
import './pokeGrid.css'

const PokeGrid = () => {
  const [pokemons, setPokemons] = useState([]);
  const [favoritesPokemons, setFavoritesPokemons] = useState([]);
  const [pokemonWanted, setPokemonWanted] = useState([]);
  const [suggestions, setSuggestions] = useState([])
  
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(30)

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  
  const [from,setFrom] = useState(0)
  const [to, setTo] = useState(30)

  useEffect( () => {
    const  getPokemonData=async()=>{
      await axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=${1126}`)
      .then((res) => {
    
        res.data.results.map(async (pokemon) => {
          await axios.get(pokemon.url).then(async(res) => {
            let isFavorite = favoritesPokemons.filter(pkm=> pkm.id === res.data.id)
            isFavorite.length > 0 ? res.data.favorite=true : res.data.favorite=false
            let pokemon = res.data
            await axios.get(pokemon.species.url).then(res =>{
              pokemon.flavor_text=res.data.flavor_text_entries[0].flavor_text
            })
          
            setPokemons((current) => [...current, pokemon]);
          });
        });
      });
    }

    getPokemonData()
  }, []);
  

 

  const handlePagination=(option)=>{
    
    if(option==='next'){
      setOffset((offset)=>offset+=30)
      setLimit((limit)=>limit+=30)

      if(filter==="favorites"){
        setFrom((from)=>from+=30)
        setTo((to)=>to+=30)

      }
    }else if(option==='prev' && offset>0){
      setOffset((offset)=>offset-=30)
      setLimit((limit)=>limit-=30)

      if(filter==="favorites" && from > 0){
        setFrom((from)=>from-=30)
        setTo((to)=>to-=30)

      }
    }
  }

  const handleSearch=(text)=>{
    let suggestionsAux = []
    if(filter==='all'){
       suggestionsAux =pokemons.filter(pkm=>pkm.name.includes(text))
    }else{
       suggestionsAux =favoritesPokemons.filter(pkm=>pkm.name.includes(text))
    }
    setSearch(text)
    setSuggestions(suggestionsAux)
    if(text === ''){
      setSuggestions([])
    }
  }

  const getSearchPokemon=async(event)=>{
    event.preventDefault()
    if(filter !== 'favorites'){
      let pkm = pokemons.filter(pkm=>pkm.name===search)
      setPokemonWanted(pkm)

    }{
      let pkm = favoritesPokemons.filter(pkm=>pkm.name===search)
      setPokemonWanted(pkm)

    }
    console.log(pokemonWanted)
  }


  return (
    <>

     <Wrapper>
      <form action="#" onSubmit={(event)=>getSearchPokemon(event)} >
      <Input placeholder="Search Pokemon" value={search} onChange={(event)=>handleSearch(event.target.value)}/>  
      </form>
     <Suggestions suggestions={suggestions} pokemons={pokemons} favoritesPokemons={favoritesPokemons} filter={filter} setPokemonWanted={setPokemonWanted} search={setSearch} />
      <Filter onChange={(event)=>setFilter(event.target.value)} value={filter} data-testid="select" >
        <option value="all" name="all">All</option>
        <option value="favorites" name="favorites">Favotires</option>

      </Filter>
     </Wrapper>
      <section className="grid-container">
        
          {pokemons.length>0 && pokemonWanted.length===0 &&
            <div className="row">
            {filter === 'favorites' ?
              favoritesPokemons.filter(pokemon=>pokemon.name.includes(search.toLowerCase())).slice(from,to).map(pokemon=>{
                return(
                  <div className="column" key={pokemon.id}>
                       <PokemonCard pokemon={pokemon} setFavoritesPokemons={setFavoritesPokemons} />   
                  </div>
                )
              })
              :
              
              pokemons.slice(offset,limit).map((pokemon,i)=>{
                return(
                  <div className="column" key={i}>
                      <PokemonCard pokemon={pokemon} setFavoritesPokemons={setFavoritesPokemons}/>
                  </div>
                )
              })

            }
            
            
          </div>}
          {pokemonWanted.length > 0 &&
            <div className='row'>
              <div className="column">
              <PokemonCard pokemon={pokemonWanted[0]} setFavoritesPokemons={setFavoritesPokemons}/>  
              </div>
  
              
            </div>



          

          }
          {pokemons.length ===0 &&
                        <Loader/>

          }



          

         
          


      </section>
  
        
        <Button onClick={()=>handlePagination('prev')}>Prev</Button> 

        <Button   onClick={()=>handlePagination('next')}>Next</Button>
      

    </>
  );
};

export default PokeGrid;
