import React, { useState } from 'react';
import Header from '../components/Header'
import useUserStore from '../useUserStore';
import axios from 'axios'

const Login = () => {
  const setUserData = useUserStore((state) => state.setUserData)
  const setTokenData = useUserStore((state) => state.setTokenData)

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
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setTokenData = useUserStore((state) => state.setTokenData)

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Login attempt: ' + username + ' ' + password);
    getToken();
  };
  const getToken = async () => {
    const loginurl = "http://127.0.0.1:8000/api/login/"
    const credentials = {
      username: username,
      password: password
    };
    console.log(credentials);
    try {
      const response = await axios.post(loginurl,credentials);
      console.log('Token: ', response.data);
    }
    catch (error) {
      console.log('error getting token: ', error);
    }
  }

    return (
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col flex-grow justify-start bg-gray-100 mt-4 rounded-4xl shadow-lg shadow-blue-200 hover:shadow-pink-200 min-w-96 max-w-128 min-h-48 max-h-256">
        <h1 className="text-blue-400 mt-8 text-5xl self-center">LOGIN</h1>
        <TextBar placeholder={"Username"} value={username} setter={setUsername}/>
        <TextBar placeholder={"Password"} value={password} setter={setPassword} type={"password"}/>
        <button
          type="submit"
          className="
            self-center
            mt-4 shadow-blue-200 shadow-lg
            w-64
            px-4 py-2 rounded-lg text-lg
            border-2 border-gray-300 outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-pink-200 focus:shadow-pink-200
            transition-all duration-300
            hover:bg-gradient-to-br hover:from-white hover:via-pink-200
            hover:to-blue-200 hover:shadow-pink-200 hover:text-black
          "
        >
        Submit
        </button>
        <div className="mb-16"></div>
    </div>
    </form>
    );
};

const RegisterComponent = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('Register attempt: ' + username + ' ' + email + ' ' + password);

  };

    return (
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col flex-grow justify-start bg-gray-100 mt-4 rounded-4xl shadow-lg shadow-blue-200 hover:shadow-pink-200 min-w-96 max-w-128 min-h-48 max-h-256">
            <h1 className="text-blue-400 mt-8 text-5xl self-center">REGISTER</h1>
            <TextBar placeholder={"Email"} value={email} setter={setEmail}/>
            <TextBar placeholder={"Username"} value={username} setter={setUsername}/>
            <TextBar placeholder={"Password"} value={password} setter={setPassword} type={"password"}/>
            <button
              type="submit"
              className="
              self-center
                mt-4 shadow-blue-200 shadow-lg
                w-64
                px-4 py-2 rounded-lg text-lg
                border-2 border-gray-300 outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-pink-200 focus:shadow-pink-200
                transition-all duration-300
                hover:bg-gradient-to-br hover:from-white hover:via-pink-200
                hover:to-blue-200 hover:shadow-pink-200 hover:text-black
              "
            >
            Submit
            </button>
            <div className="mb-16"></div>
        </div>
        </form>
        );
}

const TextBar = ({placeholder, value, setter, type="text"}) => {
    return (
        <div className="flex justify-center items-center mt-10">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setter(e.target.value)}
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