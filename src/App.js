import React, { useState } from "react";
import { Route,  BrowserRouter as Router } from 'react-router-dom';
import Trailer1 from './components/Trailer1';
import Trailer2 from './components/Trailer2';
import Trailer3 from './components/Trailer3';

import { moviesData } from "./components/MoviesData";
import Main from "./components/Main";

import Header from "./components/Header/Header";

import "./App.css";
function App() {
 

  return (
    <Router>
    <div className="App" >
    
    <Route path= "/trailer1" exact component={Trailer1}/>
    <Route path= "/trailer2" exact component={Trailer2}/>
    <Route path= "/trailer3" exact component={Trailer3}/>

    <Route path= "/" exact component={Home}/>
    
    
   
  
    </div>
    </Router>

  );
};



const Home = () => {
  const [movies, setMovies] = useState(moviesData);
  const [myInput, setMyInput] = useState("");
  const [myRate, setMyRate] = useState(0);
 
  const AddNewMovie=(x)=>{setMovies([...movies, x])}

  return (
    <div className="App">
      <Header setMyInput={setMyInput} myRate={myRate} setMyRate={setMyRate} />
      <Main
        movies={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(myInput.toLowerCase().trim()) &&
            el.rating >= myRate
        )}
        AddNewMovie={AddNewMovie}
      />
    </div>
  );
}

export default App;