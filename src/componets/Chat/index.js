import React from "react";
import * as C from "./styles"
import ChatBody from "../ChatBody";
import ChatFooter from "../ChatFooter";
import ChatHeader from "../ChatHeader";
import Default from "../Default";


const Chat = ({ userChat}) => {
    if (!userChat) return <Default />;
    
    return (
        <C.Container>
            <ChatHeader photURL={userChat?.photURL} name={userChat?.name} />
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId} />
        </C.Container>
    );
};

export default Chat;