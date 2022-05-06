import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    // const navigate = useNavigate();
    useEffect(()=>{
     const email = user.email;
     const url = `https://safe-lake-62248.herokuapp.com/items?email=${email}`
     fetch(url)
     .then(res => res.json())
     .then(data => setItems(data))
    },[user])
    return (
        <div>
            <h1>This is my items: {items.length}</h1>
        </div>
    );
};

export default MyItems;