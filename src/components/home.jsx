import React from 'react';
import diceImage from '../images/dice.png';

const Home =({toggle})=>{
    return(
<div className="home">
    <div className="img">
        <img src={diceImage} alt="public/images/dice.png" />
    </div>
    <div className="play">
        <h1>Dice Game</h1>
        <button onClick={toggle}>Play Now</button>
    </div>
</div>

    );

}
export default Home;
