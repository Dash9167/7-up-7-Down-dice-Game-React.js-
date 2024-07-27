
import { useState } from 'react';
import './App.css';
import Home from './components/home';
import Game from './components/game';



function App() {
  const [isGameStart,setGameStart]=useState(false);
  const status=()=>
  {
    setGameStart((prev)=> !prev)
  }
  return (
   <>
   {
    isGameStart ? <Game /> : <Home toggle={status}/>
   }
   </>
  );
}

export default App;
