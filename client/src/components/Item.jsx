import React from 'react';

const Item = ({itemImagePath,itemName,itemDescription,itemSellerUsername,itemSellerImagePath}) => {
    return ( 
    <div className="m-2 flex flex-row shadow-blue-200 hover:shadow-pink-200 shadow-lg rounded-4xl overflow-hidden max-w-512 bg-gray-100">
        <div className="rounded-4xl overflow-clip mr-4 flex-none aspect-square">
            <ItemImage url={itemImagePath}/>
        </div>
        <div className="flex flex-col flex-grow">
            <ItemName itemName={itemName}/>
            <ItemDescription itemDescription={itemDescription}/>
            <ItemSeller sellerUsername={itemSellerUsername} sellerImagePath={itemSellerImagePath} />
        </div>
    </div>
    );
};

const ItemImage = ({url}) => {
    return (
        <img className="rounded-4xl overflow-clip flex-none aspect-square" src={url} alt="Item listing picture" loading="lazy" />
    );
};

const ItemName = ({itemName}) => {
    return (
        <div className="self-start mt-4 ml-4">
            <h1 className="text-3xl text-black">{itemName}</h1>
        </div>
    );
};
const ItemDescription = ({itemDescription}) => {
    return(
        <div className="overflow-hidden">
            <p className="text-l pt-4 ml-8 mr-4 text-gray-700">
                {itemDescription}
            </p>
        </div>
    );
};

const ItemSeller = ({sellerUsername,sellerImagePath}) => {
    return (
    <div className="flex flex-none flex-grow justify-end items-end">
        <h1 className=" mr-4 mb-6 text-xl">{sellerUsername}</h1>
        <img className="mr-4 mb-4 rounded-full" src={sellerImagePath} alt="Seller user picture" loading="lazy" />
    </div>
    );
};

export default Item;