
import './App.css';
import {Header} from './common/Header';
import {Footer} from './common/Footer';
import { Catalog } from './components/Catalog/Catalog';
import{useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import { CreateMovie } from './components/CreateMovie/CreateMovie';
import { EditMovie } from './components/EditMovie/EditMovie';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import getAll from '../../../todo-app/client/src/services/taskService';


function App() {

  const [movie, setMovie]= useState([]);
  const [editMovie, setEditMovie] = useState({});
  const [newMovie, setNewMovie]= useState({});
  
  
const addMovieHandler = (movie)=>{
setMovie(state =>[
...state, 
movie
])
  }
  
  const baseUrl = 'http://localhost:3030/jsonstore/movies';
  useEffect(()=>{
    getAll().then((result)=>{
     setMovie(Object.values(result))
    })
  }, []);



  console.log(newMovie)

  
  

  return (
    <div className="App">
     <Header />
     <Routes>
      <Route exact path='/' element={ <Catalog movie={movie} />} />
      <Route path='/movies/:movieId/' element={<MovieDetails movie={movie} addMovieHandler={addMovieHandler}/>}/> 
     <Route path='/movies/:movieId/edit' element={<EditMovie />}/> 
      <Route path='/create' element= {<CreateMovie addMovieHandler={addMovieHandler}/> } />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
