import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import HeaderPoke from './shared/HeaderPoke'


const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo,] = useState()
  
  const navigate = useNavigate()

  const handleClick = () => navigate(`/pokedex/`)

  const {name} = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
    .then(res => setPokeInfo(res.data))
    .catch(err => console.log(err))
  }, [])
console.log(pokeInfo)
  

  
  

  return (
    <div>
       <HeaderPoke />
    
    <article className={`card___center bg-${pokeInfo?.types[0].type.name}`} > 
    
      <img src={pokeInfo?.sprites.other['dream_world'].front_default} alt="" />
       
       
       <div className={`poke__name bg-${pokeInfo?.types[0].type.name}`} > 
       <h1>Name: {name}</h1>
      <h2>Type: {pokeInfo?.types[0].type.name}</h2>
      <ul>
        <li>{pokeInfo?.stats[0].stat.name}:{pokeInfo?.stats[0].base_stat} %.</li>
        <li>{pokeInfo?.stats[1].stat.name}:{pokeInfo?.stats[1].base_stat} %.</li>
        <li> {pokeInfo?.stats[5].stat.name}:{pokeInfo?.stats[5].base_stat} %.</li>
        <li> {pokeInfo?.stats[2].stat.name}:{pokeInfo?.stats[2].base_stat} %.</li>
        <li> {pokeInfo?.stats[3].stat.name}:{pokeInfo?.stats[3].base_stat} %.</li>
        <li> {pokeInfo?.stats[4].stat.name}:{pokeInfo?.stats[4].base_stat} %.</li>
  
      </ul>
   </div>
<div className={`movem__pok bg-${pokeInfo?.types[0].type.name}`}>
<h2>
        Movements
      </h2>
      <ul>
        <li>  {pokeInfo?.moves[0].move.name} </li>
        <li>  {pokeInfo?.moves[1].move.name} </li>
        <li>  {pokeInfo?.moves[2].move.name} </li>
        <li>  {pokeInfo?.moves[3].move.name} </li>
        <li>  {pokeInfo?.moves[4].move.name} </li>


      </ul>
    </div>
 

      <button onClick={handleClick} className='home__btn'>Back All Pokemons  </button>
   
      

   
    </article>
 

</div>
  )
}

export default PokemonDetails