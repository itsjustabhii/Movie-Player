import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

const Favorites = () => {
  const {favorites} = useMovieContext()

  if(Favorites){
    return( 
      <div className='favorites'>
        <h2>Your Favorites</h2>
    <div className='mvoies-grid'>
      {favorites.map((movie) =>(
        <MovieCard movie={movie.id} key={movie}/>
      ))}
    </div>
    </div>)
  }
  return (
    <div className='favorites-empty'>
        <h2>No favorite movies</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  )
}

export default Favorites