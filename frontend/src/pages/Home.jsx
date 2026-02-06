import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'
import '../css/Home.css'

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("")

    const movies =[
        {id:1, title:"John Wick", release_date:"2020"},
        {id:2, title:"Bay Watch", release_date:"2023"},
        {id:3, title:"Melinda", release_date:"2022"},
    ]

    const handleSearch =(e) => {
        e.preventDefault()
        alert(searchQuery)
    }

  return (
    <div className='home'>
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder='Search for movies...' className='search-input'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type='submit' className='search-button'>Search</button>
        </form>
        <div className='movie-grid'>
            {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) &&
                (<MovieCard movie={movie} key={movie.id}/>))} dynamically rending the movie array
        </div>
    </div>
  )
}

export default Home