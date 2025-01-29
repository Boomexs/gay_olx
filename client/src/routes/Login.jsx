import React, { useState } from 'react';
import Header from '../components/Header'

const Login = () => {
    const [activeTab, setActiveTab] = useState("login");

    return (
    <div>
        <Header />
        <div className="flex items-center justify-center">
            <div className="flex flex-col flex-grow justify-start bg-gray-100 mt-16 rounded-4xl shadow-lg shadow-blue-200 hover:shadow-pink-200 min-w-96 max-w-128 min-h-48 max-h-256">
                <div className="flex flex-row w-full">
                {/* Tab 1 Button */}
                <button
                  className={`shadow-md px-4 py-2 rounded-tl-xl w-full focus:outline-none hover:bg-gradient-to-br hover:from-pink-300 hover:to-blue-400 hover:shadow-pink-200 hover:text-white ${
                    activeTab === "login"
                      ? "bg-pink-400 text-white shadow-pink-400"
                      : "bg-gray-100 text-blue-400 shadow-blue-300"
                  }`}
                  onClick={() => setActiveTab("login")}
                >
                  <p className="text-xl">login</p>
                </button>
              
                {/* Tab 2 Button */}
                <button
                  className={`shadow-md  px-4 py-2 rounded-tr-xl w-full focus:outline-none hover:bg-gradient-to-br hover:from-pink-300 hover:to-blue-400 hover:shadow-pink-200 hover:text-white ${
                    activeTab === "register"
                      ? "bg-pink-400 text-white shadow-pink-400"
                      : "bg-gray-100 text-blue-400 shadow-blue-300"
                  }`}
                  onClick={() => setActiveTab("register")}
                >
                  <p className="text-xl">register</p>
                </button>
                </div>
                {activeTab === "login" ? <LoginComponent /> : null}
                {activeTab === "register" ? <RegisterComponent /> : null} 
            </div>
        </div>
    </div>
    );
};

const LoginComponent = () => {
    return (
    <div className="flex flex-col flex-grow justify-start bg-gray-100 mt-4 rounded-4xl shadow-lg shadow-blue-200 hover:shadow-pink-200 min-w-96 max-w-128 min-h-48 max-h-256">
        <h1 className="text-blue-400 mt-8 text-5xl self-center">LOGIN</h1>
        <TextBar placeholder={"Username"} />
        <TextBar placeholder={"Password"} />
        <div className="mb-16"></div>
    </div>
    );
};

const RegisterComponent = () => {
    return (
        <div className="flex flex-col flex-grow justify-start bg-gray-100 mt-4 rounded-4xl shadow-lg shadow-blue-200 hover:shadow-pink-200 min-w-96 max-w-128 min-h-48 max-h-256">
            <h1 className="text-blue-400 mt-8 text-5xl self-center">REGISTER</h1>
            <TextBar placeholder={"Email"} />
            <TextBar placeholder={"Username"} />
            <TextBar placeholder={"Password"} />
            <TextBar placeholder={"Repeat Password"} />
            <div className="mb-16"></div>
        </div>
        );
}

const TextBar = ({placeholder}) => {
    return (
        <div className="flex justify-center items-center mt-10">
      <input
        type="text"
        placeholder={placeholder}
        className="
        shadow-blue-200 shadow-lg
          min-w-64
          max-w-128
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

export default Login;