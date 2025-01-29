import React from 'react';
import useUserStore from '../useUserStore';

const Header = () => {
    const firstname = useUserStore((state) => state.firstname)
    const lastname = useUserStore((state) => state.lastname)
    const pfp = useUserStore((state) => state.pfp)

    return (
    <div className="flex w-full bg-gray-100 shadow-gray-200 shadow-lg">
        <div className="flex ml-8 mt-8">
            <Logo />
        </div>
        <div className="flex flex-row mr-8 pt-4 pb-4 w-full">
            <div className="flex flex-grow mb-6 justify-center">
                <SearchBar />
            </div>
            <User username={firstname + ' ' + lastname} userImagePath={pfp} />
        </div>
    </div>
    );
}

const Logo = () => {
    return (
    <div className="flex flex-col -mt-4">
        <a href="/" className="whitespace-nowrap text-8xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_bottom,_#ff0000_25%,_#ff8c00_25%,_#ff8c00_38%,_#ffd700_38%,_#ffd700_55%,_#008000_55%,_#008000_71%,_#0000ff_71%,_#0000ff_84%,_#800080_84%,_#800080_100%)]">
            GAY OŁX
        </a>
    </div>
    
);
}

const User = ({username,userImagePath}) => {
    console.log('header', userImagePath)
    return (
    <div className="flex flex-none justify-end items-start">
        <h1 className=" mr-4 mt-2 text-xl">{username}</h1>
        <img className="mr-4 w-16 h-16 rounded-full" src={userImagePath} alt="Seller user picture" loading="lazy" />
    </div>
    );
};

const SearchBar = () => {
    return (
        <div className="flex justify-center items-center mt-10">
      <input
        type="text"
        placeholder="Search..."
        className="
        shadow-blue-200 shadow-lg
          min-w-128
          max-w-48
          px-4 py-2 rounded-lg text-lg border-2 border-gray-300 outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-pink-200 focus:shadow-pink-200
          transition-all duration-300
          hover:bg-gradient-to-br hover:from-white hover:via-pink-200 hover:to-blue-200 hover:shadow-pink-200
          hover:text-black
        "
      />
    </div>
    );
};

export default Header;