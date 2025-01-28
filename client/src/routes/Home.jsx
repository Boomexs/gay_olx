import React from 'react';
import Item from '../components/Item'
import Header from '../components/Header'

const Home = () => {
    return (
    <div>
        <Header />
        <Item 
        itemImagePath={"https://placehold.co/256"}
        itemName={"Choker"}
        itemDescription={"This femboy choker is a bold yet delicate accessory designed to complement and enhance any outfit with a touch of elegance and edge. Crafted with high-quality materials, it features a sleek, adjustable band that comfortably fits around the neck. The design often incorporates playful, soft details like subtle charms, rhinestones, or velvet, giving it a mix of both androgynous and feminine flair. Perfect for those who embrace their unique style, it adds a touch of confident, alternative fashion to any look, whether for everyday wear or special occasions."}
        itemSellerUsername={"Seller username"}
        itemSellerImagePath={"https://placehold.co/48"} />
    </div>);
};

export default Home;