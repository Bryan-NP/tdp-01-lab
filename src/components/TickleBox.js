import React,{useState} from 'react';

const TickleBox = () => {
    //State to manage the msg display
    const [msg, setMessage] = useState('');
    //State to set a counter
    const [count,setCount] = useState(0);
    //Event handler to update the message
    const handleMouseEnter =() =>{
        setMessage("that tickles!");
    }
    const handleMouseExit =() =>{
        setMessage('');
        setCount(prevCount => prevCount + 1);
    }

    return(
        <div style ={{
            border:"1px solid black",
            padding:'10px',
            width:'20px'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        ></div>

    );
};

export default TickleBox;