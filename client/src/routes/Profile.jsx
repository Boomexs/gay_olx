import { React, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Item from "../components/Item"

const Profile = () => {
    return (
    <div>
        <Header />
        <div className="flex flex-col items-center justify-center">
            <ProfileCard />
            <p className="my-4 text-2xl text-center text-blue-300 shadow-lg shadow-blue-200 border-0 w-full">Inventory</p>
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
    </div>
    );
};

const ProfileCard = () => {
    const { id } = useParams();
    
    const user = {    
        firstname: 'Raf',
        lastname: 'isto',
        email: 'bob@mail',
        pfp: 'https://placehold.co/64',
        is_verified: true,
        bio: 'Welcome to Rafisto, the ultimate destination for men who embrace their feminine side without compromise. Curated with style and confidence in mind, Rafisto offers a bold collection of outfits designed specifically for femboys who want to express their true selves. From chic blouses and form-fitting skirts to tailored dresses and accessories that sparkle, Rafisto’s collection is all about empowering men to look and feel their best—whether you\'re stepping out for a night on the town or lounging in style. We believe fashion knows no boundaries, and our mission is to break free from traditional gender norms while celebrating the unique beauty in all expressions. With high-quality fabrics, versatile styles, and a keen eye for modern trends, Rafisto is here to help you embrace the feminine side of fashion in a way that feels authentic and powerful.',
        pronouns: 'nick/her'
    }

    return (
    <div className="flex flex-col bg-gray-100 rounded-2xl shadow-lg shadow-blue-200 hover:shadow-pink-200 mt-16 max-w-[60%] min-h-64">
        <User username={user.firstname + ' ' + user.lastname} userImagePath={user.pfp} pronouns={user.pronouns} isVerified={user.is_verified}/>
        <UserBio bio={user.bio}/>
    </div>
    );
};

const User = ({username,userImagePath,pronouns,isVerified}) => {
    return (
    <div className="flex flex-none justify-start items-start">
        <img className="m-4 rounded-full" src={userImagePath} alt="Seller user picture" loading="lazy" />
        <div>
            <div className="flex mt-4">
                <h1 className="text-xl">{username}</h1>
                {isVerified && <span className="ml-2 text-xl text-pink-400">&#10003;</span>}
            </div>
            <p className="text-sm text-gray-700">{pronouns}</p>
        </div>
    </div>
    );
};

const UserBio = ({bio}) => {
    return (
    <div className="p-8 pt-0 overflow-hidden">
        <p className="break-words text-gray-800">{bio}</p>
    </div>
    );

}

export default Profile;