import { useState } from 'react'
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import './App.css';


const API_URL = 'https://www.omdbapi.com/?apikey=b95f1dd4';


function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const searchMovies = async (query) => {
    if (!query) return
    setLoading(true)

    const response = await fetch(`${API_URL}&s=${query}`)
    const data = await response.json()

    if (data.Search) {
      setMovies(data.Search)
    } else {
      setMovies([])
    }

    setLoading(false)
  }

  return (
    <div className="container">
      <h1>🎬 Movie Search App</h1>
      <SearchBar onSearch={searchMovies} />
      {loading && <p>Loading...</p>}
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  )
}

export default App;

