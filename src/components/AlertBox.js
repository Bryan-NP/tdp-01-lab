import React,{useState} from 'react';

const NumberBox = ({initialValue}) => {
    //State to manage the count
    const [count, setCount] = useState(initialValue);
    const maxCount = 10;
    const minCount = -10;
    //Event handler to update the count
    const increaseCount =() =>{
        setCount(prevCount => (prevCount < maxCount)? prevCount + 1 : prevCount);
    }
    const decreaseCount =() =>{
        setCount(prevCount => (prevCount > minCount)? prevCount - 1 : prevCount);
    }

    const resetCount =() =>{
        setCount(initialValue);
    }

    return(
        <div style ={{
            border:"1px solid black",
            padding:'10px',
            width:'20px'
        }}>
            <div style ={{fontSize: '24px', marginBottom: '10px'}}></div>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            <button onClick={resetCount}>Reset Counter</button>
        </div>
    );
};

export default NumberBox;