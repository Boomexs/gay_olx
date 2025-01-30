import React from 'react';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Item from '../components/Item'
import Header from '../components/Header'
import axios from 'axios'
import useUserStore from '../useUserStore';

const Favorites = () => {
    const searchurl = "http://127.0.0.1:8000/api/favourites/"

    const token = useUserStore((state) => state.token)
    // const id = 

    const location = useLocation();
    const [items, setItems] = useState([]);

    const getItems = async () => {
        console.log('get items start')
        try{
            const respone = await axios.get(searchurl,{
                headers: {
                    'Authorization': `Token ${token}`,
                }
            });
            if(Array.isArray(respone.data.favourites)){ 
                setItems(respone.data.favourites);
                console.log(respone.data.favourites);
            }
            else{
                setItems([]);
            }
        } catch (error) {
            console.log('get items error: ', error);
        }
    }

    useEffect(() => {
        getItems();
    },[location]);

    return (
    <div>
        <Header />
        <h1 className="my-4 text-2xl text-center text-blue-300 shadow-lg shadow-blue-200 border-0 w-full">Favorites</h1>
        <div className="flex h-full">
            <div className="m-auto">
                {items.map((item) => (
                    <Item 
                    key={item.id}
                    id={item.id}
                    itemImagePath={"http://127.0.0.1:8000" + item.image}
                    itemName={item.name}
                    itemDescription={item.description}
                    itemSellerUsername={item.seller.first_name + ' ' + item.seller.last_name}
                    itemSellerImagePath={"http://127.0.0.1:8000" + item.seller.pfp}
                    itemPrice={item.price}
                    />
                ))}
            </div>
        </div>
    </div>);
};

export default Favorites;