import React from 'react';
import Item from '../components/Item'
import Header from '../components/Header'
import Filters from '../components/Filters'

const Home = () => {

    
    return (
    <div>
        <Header />
        <div className="flex justify-between h-full">
            {/* <Filters /> */}
            <div className="">
                <Item 
                itemImagePath={"https://placehold.co/256"}
                itemName={"Choker"}
                itemDescription={"This femboy choker is a bold yet delicate accessory designed to complement and enhance any outfit with a touch of elegance and edge. Crafted with high-quality materials, it features a sleek, adjustable band that comfortably fits around the neck. The design often incorporates playful, soft details like subtle charms, rhinestones, or velvet, giving it a mix of both androgynous and feminine flair. Perfect for those who embrace their unique style, it adds a touch of confident, alternative fashion to any look, whether for everyday wear or special occasions."}
                itemSellerUsername={"Seller username"}
                itemSellerImagePath={"https://placehold.co/48"} />
                <Item 
                itemImagePath={"https://placehold.co/256"}
                itemName={"Choker"}
                itemDescription={"This femboy choker is a bold yet delicate accessory designed to complement and enhance any outfit with a touch of elegance and edge. Crafted with high-quality materials, it features a sleek, adjustable band that comfortably fits around the neck. The design often incorporates playful, soft details like subtle charms, rhinestones, or velvet, giving it a mix of both androgynous and feminine flair. Perfect for those who embrace their unique style, it adds a touch of confident, alternative fashion to any look, whether for everyday wear or special occasions."}
                itemSellerUsername={"Seller username"}
                itemSellerImagePath={"https://placehold.co/48"} />
                <Item 
                itemImagePath={"https://placehold.co/256"}
                itemName={"Choker"}
                itemDescription={"This femboy choker is a bold yet delicate accessory designed to complement and enhance any outfit with a touch of elegance and edge. Crafted with high-quality materials, it features a sleek, adjustable band that comfortably fits around the neck. The design often incorporates playful, soft details like subtle charms, rhinestones, or velvet, giving it a mix of both androgynous and feminine flair. Perfect for those who embrace their unique style, it adds a touch of confident, alternative fashion to any look, whether for everyday wear or special occasions."}
                itemSellerUsername={"Seller username"}
                itemSellerImagePath={"https://placehold.co/48"} />
                <Item 
                itemImagePath={"https://placehold.co/256"}
                itemName={"Choker"}
                itemDescription={"This femboy choker is a bold yet delicate accessory designed to complement and enhance any outfit with a touch of elegance and edge. Crafted with high-quality materials, it features a sleek, adjustable band that comfortably fits around the neck. The design often incorporates playful, soft details like subtle charms, rhinestones, or velvet, giving it a mix of both androgynous and feminine flair. Perfect for those who embrace their unique style, it adds a touch of confident, alternative fashion to any look, whether for everyday wear or special occasions."}
                itemSellerUsername={"Seller username"}
                itemSellerImagePath={"https://placehold.co/48"} />
            </div>
            <div className="flex flex-col w-128 max-h-256 justify-center shadow-xl shadow-pink-200">
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