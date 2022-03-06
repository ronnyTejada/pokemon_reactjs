import axios from 'axios';

let pokemonsWithData = []
let pokemons = []
const getPokemons=async(offset,limit)=>{
   
    await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`).then((res)=>{
        console.log(res.data)
        pokemons = res.data.results
        console.log(pokemons.length)
        pokemons.map(pokemon=>{
            axios.get(pokemon.url).then((res)=>{
                
                
               pokemonsWithData.push({id:res.data.id,name:res.data.name,sprites:res.data.sprites})
            })
        
        })


    })
  
  
    return pokemonsWithData
}



export default getPokemons