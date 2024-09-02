import React from 'react';
function SumOfTwo (props) {
    const sum = props.a + props.b;
    return(
        <div>"Sum of Two Numbers are:" {sum}</div>
    );
}

export default SumOfTwo;