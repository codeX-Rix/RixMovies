import React from 'react'
import { useGlobalContext } from '../context'

const Movies = () => {
  const {movie} = useGlobalContext();
  return (
    <>
     {movie.map((curMovie) => {
      return <div>{curMovie.Title}</div>
     })} 
    </>
  )
}

export default Movies
