import React, {component} from 'react';
const JapFoodMenu = ({home,about,menu,contact}) => {
    return (
    <nav>
        <ul id="menu">
        <li>
            <a href ="#">{home}</a>
        </li>
        <li>
            <a href ="#">{about}</a>
        </li>
        <li>
            <a href="#">{menu}</a> 
        </li>
        <li>
            <a href="#">{contact}</a>
        </li>
        </ul>
    </nav>
    );
};


export default JapFoodMenu;