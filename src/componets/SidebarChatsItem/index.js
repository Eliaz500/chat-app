import React from "react";
import * as C from "./styles";
import { db } from "../../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { MdPerson } from "react-icons/md";


const getUser = (users, userLogged) => users?.filter((user) => user !== userLogged?.email)[0];


const SidebarChatsItem = ({ id, users, user, setUserChat, active}) => {
  const [getUserItem] = useCollection(db.collection("users").where("email", "==", getUser(users, user)));
  const Avatar = getUserItem?.docs?.[0]?.data();
  const item = getUser(users, user);

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item.split("@"),
      photoURL: Avatar?.photoURL,
    };
    setUserChat(userChat);
  };

  return (
    <C.Container onClick={handleNewChat} className={active}>
        {Avatar && Avatar.photoURL ? (<C.Avatar src={Avatar.photoURL} />) : (<MdPerson />)}
      <C.Name>{item.split("@")[0]}</C.Name>
    </C.Container>
  );
};

export default SidebarChatsItem;