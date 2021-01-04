import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Users = (props) => {
    const {name, email, id} = props.friend;

    const userStyle = {
        border: '1px solid tomato',
        margin: '30px', 
        padding: '30px',
        borderRadius: '10px'
    }
    // way of javascript style to show userdDetails
    // let history = useHistory();
    // const handleUserInfo = (userId) => {
    //     const url = `/users/${userId}`
    //     history.push(url);
    // }

    return (
        <div style={userStyle}>
            <h3> Name: {name} </h3>
            <p>  email: {email}</p>
            <Link to={`/users/${id}`}><button>show user{id}</button></Link>
            {/* <button onClick={() => handleUserInfo(id)}>click me</button> */}

        </div>
    );
};

export default Users;