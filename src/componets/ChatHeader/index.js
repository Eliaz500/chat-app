import react from "react";
import * as C from "./styles"
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";


const ChatHeader = ({ photoURL, nome}) => {
    return (
        <C.Container>
            <C.UserInfo>
                {photoURL ? (<C.Avatar src={photoURL} alt="Avatar"/>) : (<MdPerson />)}
                <C.NomeContent>
                    <C.Nome>{nome}</C.Nome>
                </C.NomeContent>
            </C.UserInfo>
            <C.Options>
                <MdSearch />
                <MdMoreVert />
            </C.Options>
        </C.Container>
    );
};

export default ChatHeader;