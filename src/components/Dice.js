import React,{useState} from 'react';

const Dice =() =>{
    //State to store the value of the dice
    const[diceValue, setDiceValue] = useState(generateRandomNumber());

    //Function to generate a random number between 1 and 6
    function generateRandomNumber(){
        return Math.floor(Math.random() * 6) + 1;
    }

    //Event handler for dice click
    const handleClick=() =>{
        setDiceValue(generateRandomNumber());
    }

    return(
        <div style ={{
            border:"1px solid black",
            padding:'10px',
            width:'20px'
        }}
        onClick={handleClick}
        >{diceValue}
        </div>
    );
};
export default Dice;