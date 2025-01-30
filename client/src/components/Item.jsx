import React from 'react';
import Feedback from './Feedback';
import {useState} from 'react'
import axios from 'axios'
import useUserStore from "../useUserStore.js";

const Item = ({itemImagePath,itemName,itemDescription,itemSellerUsername,itemSellerImagePath, id, itemPrice}) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        console.log('switching feedback')
        setShow(!show);
    };

    return ( 
    <div>
        <div onClick={handleClick} className="m-2 flex flex-row shadow-blue-200 hover:shadow-pink-200 shadow-lg rounded-4xl overflow-hidden max-w-512 bg-gray-100">
            <div className="rounded-4xl overflow-clip mr-4 flex-none aspect-square">
                <ItemImage url={itemImagePath}/>
            </div>
            <div className="flex flex-col flex-grow">
                <ItemName itemName={itemName} itemPrice={itemPrice} id={id} />
                <ItemDescription itemDescription={itemDescription}/>
                <ItemSeller sellerUsername={itemSellerUsername} sellerImagePath={itemSellerImagePath} />
            </div>
        </div>
        {show ? <Feedback id={id} show={show}/> : null }
    </div>
    );
};

const ItemImage = ({url}) => {
    return (
        <img className="rounded-4xl overflow-clip flex-none aspect-square w-64 h-64" src={url} alt="Item listing picture" loading="lazy" />
    );
};

const ItemName = ({itemName, itemPrice, id }) => {
    const token = useUserStore((state) => state.token)
    const url = "http://127.0.0.1:8000/api/favourites/"

    const addToFav = async () => {
        console.log('get items start')
        try{
            const respone = await axios.post(url,
                { productId: id }, // This is the request body (data)
    {
            headers: {
                'Authorization': `Token ${token}`
            }
            });
        } catch (error) {
            console.log('get items error: ', error);
        }
    }
    return (
        <div className="self-start mt-4 ml-4">
            <h1 className="text-3xl text-black">{itemName} - {itemPrice}$</h1>
            <a className="ml-4" href="/favorites" onClick={addToFav}>
                <span
                    className="w-[48px] pb-[4px] shadow-md shadow-blue-200 text-center table text-2xl rounded-full hover:bg-gradient-to-br hover:from-white hover:via-pink-200 hover:to-blue-200 hover:shadow-pink-200 text-blue-400 hover:text-white"> &hearts; </span>
            </a>
        </div>
    );
};
const ItemDescription = ({itemDescription}) => {
    return (
        <div className="overflow-hidden">
            <p className="text-l pt-4 ml-8 mr-4 text-gray-700">
                {itemDescription}
            </p>
        </div>
    );
};

const ItemSeller = ({sellerUsername, sellerImagePath}) => {
    return (
        <div className="flex flex-none flex-grow justify-end items-end">
        <h1 className=" mr-4 mb-6 text-xl">{sellerUsername}</h1>
        <img className="mr-4 mb-4 rounded-full w-16 h-16" src={sellerImagePath ? sellerImagePath : "https://placehold.co/64"} alt="<image>" loading="lazy" />
    </div>
    );
};

export default Item;