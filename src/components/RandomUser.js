import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Function to fetch and set user data
    const fetchUserData = () => {
        axios.get("https://randomuser.me/api/").then((response) => {
            console.log("randomuser response", response);
            setFirstName(response.data.results[0].name.first);
            setLastName(response.data.results[0].name.last);
        });
        // fetch('https://randomuser.me/api/')
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log("Random User data", data);
        //         setFirstName(data.results[0].name.first);
        //         setLastName(data.results[0].name.last);
        //     })
        //     .catch((error) => console.error('Error fetching user data:', error));
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>
        <p>Random User: {firstName} {lastName}</p>
        </>        
    );
};

export default RandomUser;
