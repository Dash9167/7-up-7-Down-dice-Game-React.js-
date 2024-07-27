import React,{useState} from 'react';
import Roll from './roll';
const Game=()=>{
   

    const [display,setdisplay]=useState(false);
    const showRule=()=>{
         setdisplay(prev=>!prev);
    }
    return(
        <>
       
        <div className="game">
            
            <div className="heading">
            <h2>Dice Game is,<br />
                Seven Up and SevenDown </h2>
                <button onClick={showRule}>{display ? 'Hide Rule & Regulations' : 'Show Rule & Regulations'}</button>
                <div className="rule">
                    {
                        display && (<ul>
                            <li>Roll the two dice.</li>
                            <li>If the sum is 7 or more, it’s "7 Up".</li>
                            <li>If the sum is 6 or less, it’s "7 Down".</li>
                            <li>Players who guessed correctly earn a point or win a<br/> round.</li>
                        </ul>)
                    }
                
            </div>
            </div>
           
            <div className="img-dice">
              <Roll/>   
            </div>
        </div>
     </>

    );
}
export default Game;