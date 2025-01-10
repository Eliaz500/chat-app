import React, {useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./componets/Login";
import Loading from "./componets/Loading";


const App = () => {
    const [user, loading] = useAuthState(auth);

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

    return <div>Chat APP</div>;
};

export default App;