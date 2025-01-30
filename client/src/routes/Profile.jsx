import { React, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Item from "../components/Item"
import useUserStore from '../useUserStore';

const Profile = () => {
    return (
    <div>
        <Header />
        <div className="flex flex-col items-center justify-center">
            <ProfileCard />
            <p className="my-4 text-2xl text-center text-blue-300 shadow-lg shadow-blue-200 border-0 w-full">Inventory</p>
        </div>
    </div>
    );
};

const ProfileCard = () => {
    
    const user = {    
        firstname: useUserStore((state) => state.firstname),
        lastname: useUserStore((state) => state.lastname),
        email: useUserStore((state) => state.email),
        pfp: useUserStore((state) => state.pfp),
        is_verified: useUserStore((state) => state.is_verified),
        bio: useUserStore((state) => state.bio),
        pronouns: useUserStore((state) => state.pronouns)
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
        <img className="w-32 h-32 m-4 rounded-full" src={userImagePath} alt="Seller user picture" loading="lazy" />
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