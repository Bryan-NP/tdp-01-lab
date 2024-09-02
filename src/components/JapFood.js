import './japfood.css'
import React, {component} from 'react';
import JapFoodMenu from "./JapFoodMenu";
const JapFood = () => {
    return (
        <JapFoodMenu
            home="Home"
            about="About Us"
            menu="Our Menu"
            contact="Contact Us"
        />
    );
};

export default JapFood;