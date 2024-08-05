import React, { useState } from 'react'

export default function Roll() {
    
        const [startDice1,setsartDice1]=useState(0);
        const [startDice2,setsartDice2]=useState(0);
        const [startRotation,setsatrtRotation]=useState(0);
     
        const [startGayab,setstartGayab]=useState(false);
  


     



        const [animate, setAnimate] = useState(false);

        const generateRandomNumber1=(min,max)=>{  
            return Math.floor(Math.random() * (min * max) +min);     
        }
        const generateRandomNumber2=(min,max)=>{  
        return Math.floor(Math.random() * (min * max) +min);     
        }
        const playgame1 = () => {
         
          const randomNumber1 = generateRandomNumber1(1, 6);
          const randomNumber2 = generateRandomNumber2(1, 6);
          
          // Set dice values and other states
          setsartDice1(randomNumber1);
          setsartDice2(randomNumber2);
          
          // Perform rotations and animations
          setsatrtRotation(prev => prev + 360 * 5);
          setAnimate(true);
          setTimeout(() => setAnimate(false), 2000);
         
          setstartGayab(true);
          setTimeout(() => setstartGayab(false), 3000);
          
          // Calculate the sum and show result after animations
          const sum = randomNumber1 + randomNumber2;
          
          setTimeout(() => {
            if (sum >= 7) {
              alert("Congratulations, you won!!")
              
            } else {
              alert("You lost the game!! ")
             
            }
          }, 3100);
        }

       const playgame2=()=>{
        const randomNumber1=generateRandomNumber1(1,6);
        const randomNumber2=generateRandomNumber2(1,6);
         setsartDice1(randomNumber1);
         setsartDice2(randomNumber2);
         
         setsatrtRotation(prev=>prev+ 360*5);
         setAnimate(true);
         setTimeout(() => setAnimate(false), 2000);
      
         setstartGayab(true);
         setTimeout(() => setstartGayab(false),3000);  
         const sum=randomNumber1+randomNumber2 ;
         setTimeout(() => {
          if(sum < 7)
          {
            alert("Congratulations, you won!!")
              
          } else {
            alert("You lost the game!! ")
           
          } 
         }, 3100); 
       }
     return (<>
    
    <div className="img2">
    <img src={`../images/dice${startDice1}.png`} alt={startDice1} style={{ transform: `rotate(${startRotation}deg)` }}
     className={`dice-image ${animate ? 'animate' : ''}`}/>
    <img src={`../images/dice${startDice2}.png`} alt={startDice1} style={{ transform: `rotate(${startRotation}deg)`}}
     className={`dice-image ${animate ? 'animate' : ''}`}/>
    </div>
    <div className="img2">
    <button onClick={playgame1}  className={`${startGayab?'gayab':''}`}>Seven UP</button>        
    <button onClick={playgame2}  className={`${startGayab?'gayab':''}`}>Seven Down</button>        

    </div>  
  
    </>
  );
}
