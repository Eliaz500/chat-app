import React, {useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./componets/Login";
import Loading from "./componets/Loading";
import Sidebar from "./componets/Sidebar";
import * as C from "./styles/app"
import Chat from "./componets/Chat";


const App = () => {
    const [user, loading] = useAuthState(auth);
    const [userChat, setUserChat] = useState(null);

    useEffect(() => {
        if (user){
            db.collection("users").doc(user.uid).set({
                email: user.email,
                photoURL: user.photoURL
            });
        }
    }, [user]);

    if (loading) return <Loading />;

    if (!user) return <Login />;

    return (
        <C.Container>
            <Sidebar setUserChat={setUserChat} userChat={userChat}/>
            <Chat userChat={userChat} />
        </ C.Container>
    );
};

export default App;