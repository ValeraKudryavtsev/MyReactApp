import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import MessageForm from "./MessageForm";
import { addChatAC, removeChatAC } from "../redux/chatActions";
import { getChatsState } from "./selectors";

const Chats = () => {
    const chats = useSelector(getChatsState)
    const dispatch = useDispatch()

    const [currentChatId, setCurrentChatId] = useState(0)

    const newChat = {
        id: `${chats.length}`,
        recipient: 'Новый чат',
    }

    const addChatHandler = () => {
        dispatch(addChatAC(newChat));
    }
    const removeChatHandler = () => {
        if (chats.length - 1 === -1) {
            alert("Все чаты удалены")
        } else {
            setCurrentChatId(0)
            dispatch(removeChatAC());
        }
    }

    return (
        <div className='chats__wrap'>
            <ul className='chats__list'>
                {chats.map((e, id) =>
                    <Link className='nav__link' key={id} to={`${id}`}
                        onClick={() => {
                            setCurrentChatId(id)
                            console.log(currentChatId)
                        }}
                    >{e.recipient}</Link>
                )}
                <button className="chats__list-button" onClick={addChatHandler}>Добавить чат</button>
                <button className="chats__list-button" onClick={removeChatHandler}>Удалить чат</button>
            </ul>
            <div className='chat__box'>
                <MessageForm />
            </div>
        </div>
    )
}

export default Chats