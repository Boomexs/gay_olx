import React from 'react';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';

// ,{
//     headers: {
//         'Authorization': `Token ${token}`,
//     }
// }

const Feedback = ({id,showFeedback}) => {
    const searchurl = "http://127.0.0.1:8000/api/feedback/" + id

    const location = useLocation();
    const [items, setItems] = useState([]);

    const getItems = async () => {
        console.log('get feedback start')
        try{
            const respone = await axios.get(searchurl);
            if(Array.isArray(respone.data)){ 
                setItems(respone.data);
                console.log(respone.data);
            }
            else{
                setItems([]);
            }
        } catch (error) {
            console.log('get feedback error: ', error);
        }
    }

    useEffect(() => {
        getItems();
    },[showFeedback]);

    return (
        <div className="m-2 flex flex-col p-4 shadow-blue-200 hover:shadow-pink-200 shadow-lg rounded-4xl overflow-hidden max-w-512 bg-gray-100">
            {items.map((item,index) => (
                    <Card
                    key={index}
                    rating={item.rating}
                    text={item.text}
                    />
                ))}
        </div>
        // <h1>TEST</h1>
    );
}

const Card = ({rating,text}) => {
    return (
    <div>
        <h1 className="text-xl text-pink-400">{rating}</h1>
        <p className="text-gray-600">{text}</p>
    </div>
    );
};

export default Feedback;