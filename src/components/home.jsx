import React from 'react';
const Home =({toggle})=>{
    return(
<div className="home">
    <div className="img">
        <img src="./public/images/dice.png" alt="" />
    </div>
    <div className="play">
        <h1>Dice Game</h1>
        <button onClick={toggle}>Play Now</button>
    </div>
</div>

    );

}
export default Home;
