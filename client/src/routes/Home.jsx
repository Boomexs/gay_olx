import React from 'react';
import { useState } from 'react';
import Item from '../components/Item'
import Header from '../components/Header'
import Filters from '../components/Filters'
import { useEffect } from 'react';
import axios from 'axios'
import useUserStore from '../useUserStore';

const Home = () => {

    const searchurl = "http://127.0.0.1:8000/api/products/"

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    // const token = useUserStore((state) => state.token)


    const getItems = async () => {
        try{
            const respone = await axios.get(searchurl,{phrase: search});
            if(Array.isArray(respone.data)){ 
                setItems(respone.data)
            }
            else{

            }
        } catch (error) {
            console.log('get items error: ', error);
        }
    }

    useEffect(()=>{
        console.log('search: ',search)
        if(search.length == 0){
            getItems();
        }
        if(search.length > 3){
            getItems();
        }
        console.log(items)
    },[search]);

    return (
    <div>
        <Header search={search} setSearch={setSearch} />
        <div className="flex h-full">
            {/* <Filters /> */}
            <div className="ml-auto">
                {items.map((item) => (
                    <Item 
                    key={item.id}
                    itemImagePath={"http://127.0.0.1:8000" + item.image}
                    itemName={item.name}
                    itemDescription={item.description}
                    itemSellerUsername={item.seller.first_name + ' ' + item.seller.last_name}
                    itemSellerImagePath={"http://127.0.0.1:8000" + item.seller.pfp}
                    />
                ))}
            </div>
            <div className="flex flex-col w-128 ml-auto max-h-256 shadow-xl shadow-pink-200">
                <div className="h-20" />
                <img src="ad.png" className="animate-bounce"/>
                <p className="p-2 text-md text-center">
                    Hot men in your area want to meet you
                </p>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="p-2 text-lg text-center animate-pulse text-red-600 underline">
                    CLICK HERE
                    </a>
            </div>
        </div>
    </div>
    );
};

export default Home;