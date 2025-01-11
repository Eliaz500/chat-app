import react from "react";
import * as C from "./styles"
import ChatBody from "../ChatBody";
import ChatFooter from "../ChatFooter";
import ChatHeader from "../ChatHeader";


const Chat = ({ userChat}) => {
    return (
        <C.Container>
            <ChatHeader photURL={userChat?.photURL} name={userChat?.name} />
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId} />
        </C.Container>
    );
};

export default Chat;