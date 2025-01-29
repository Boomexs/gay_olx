import {create} from 'zustand';

const useUserStore = create((set) => ({
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
    setTokenData: (token) => set({token})
}));

export default useUserStore;