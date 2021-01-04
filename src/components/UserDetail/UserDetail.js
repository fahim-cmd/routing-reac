import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {userId} = useParams();

    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch( url)
        .then ( res => res.json())
        .then ( data => setUser(data))
    }, [])

    return (
        <div>
            <h4> user detail is here: {userId}</h4>
            <h3> {user.name}</h3>
            <p>  email: {user.email}</p>
            <p> website: {user.website}</p>
            <p> phone : {user.phone}</p>
        </div>
    );
};

export default UserDetail;