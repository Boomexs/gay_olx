import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import axios from 'axios'

const fetchData = async (token) => {
    const url = "http://127.0.0.1:8000/api/userInfo/"
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Token ${token}`,
            }
        });
        console.log('user data fetched: ', response.data);
        // console.log(state.pfp);
        return response.data;
    } catch (error) {
        console.log('Error fetching user data: ', error);
    }
    return;
};

const useUserStore = create(persist(
    (set) => ({
    token: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    pfp: '',
    is_verified: false,
    bio: '',
    pronouns: '',

    setUserData: (username, firstname, lastname, email, pfp, is_verified, bio, pronouns) => set({username, firstname, lastname, email, pfp, is_verified, bio, pronouns}),
    setTokenData: (token) => {
        set({token});
        console.log('Token updated to: ', token)

        fetchData(token).then((data) => {
            console.log('User data promise fulfilled!',data);
            if(data != ''){
            set({username: data.username,firstname: data.first_name,lastname: data.last_name,email: data.email,pfp: "http://127.0.0.1:8000" + data.pfp,is_verified: data.is_verified,bio: data.bio,pronouns: data.pronouns});
        }});
    },
}),{
    name: 'session-storage', // The name of the storage
    getStorage: () => localStorage, // Default is localStorage
}));

export default useUserStore;