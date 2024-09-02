import React from 'react';

const RefreshButton =() =>{
    //Event handler for refresh button click
    const handleClick =() =>{
        window.location.reload();
    }
    return(
        <button onClick={handleClick}>Refresh</button>
    );
};

export default RefreshButton;