import React from "react";
import * as C from "./styles";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarChatsItem from "./../SidebarChatsItem/index";



const SidebarChats = ({ setUserChat, userChat }) => { 
  const [user] = useAuthState(auth);

  const refChat = db.collection("chats").where("users", "array-contains", user.email);

  const [chatsSnapshot, loading, error] = useCollection(refChat);

  return (
    <C.Container>
      {loading && <div>Carregando chats...</div>}
      {error && <div>Ocorreu um erro ao carregar os chats: {error.message}</div>}
      {chatsSnapshot && chatsSnapshot.docs.map((item, index) =>(
        <C.Content key={index}>
          <SidebarChatsItem
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
          />
          <C.Divider />
        </C.Content>
      ))}
    </C.Container>
  );
};

export default SidebarChats;