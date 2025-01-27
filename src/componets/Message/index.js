import React from "react";
import * as C from "./styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

const Message = ({ user, message }) => {
    const [userLoggedin] = useAuthState(auth);

    return (
        <C.Container>
            <C.Line className={userLoggedin?.email === user ? "me" : ""}>
                <C.Content>
                    <C.Message>{message.message}</C.Message>
                    <C.MessageDate>
                        {new Date(message?.timestamp).toLocaleDateString()}
                    </C.MessageDate>
                </C.Content>
            </C.Line>
        </C.Container>
    );
};

export default Message;