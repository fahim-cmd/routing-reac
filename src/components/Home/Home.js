import React from 'react';
import { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then( res => res.json())
      .then ( data => setFriends(data))
    })
    return (
        <div>
             <h1> friends: {friends.length }</h1>
            {
            friends.map( friend => <Users friend={friend}></Users>)
            }
        </div>
    );
};

export default Home;