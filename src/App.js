import './App.css';
import { Container } from 'react-bootstrap';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { MovieList } from './components/MovieList';
import { useState } from 'react';


function App() {
  const [movies, setMovies] = useState([])
const addMovieToList = movieObj =>{
  const newArg = movies.filter((item) => item.imdbID!= movieObj.imdbID)
  setMovies([...newArg, movieObj])
}
const handleOnDelete = (id) => {
  if(window.confirm("Are you sure you want to delete this movid")){
  setMovies(movies.filter((item) => item.imdbID!== id))

  }
}

console.log(movies)
  return (
    <div className='wrapper'>
      <Container>
     {/* title  */}
     <Title />

    {/* form  */}
    <SearchForm addMovieToList={addMovieToList}/>

    {/* movie list  */}
    <MovieList movies={movies} handleOnDelete={handleOnDelete}/>

    </Container>
    </div>
  );
}

export default App;
