import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Message from "./Message";
import MessageForm from "./MessageForm";
import { addChatAC, removeChatAC } from "../profileRedux/chatActions";
import { getChatsState, getMessageState } from "./selectors";

const Chats = () => {
    const chats = useSelector(getChatsState)
    const messages = useSelector(getMessageState)
    const dispatch = useDispatch()

    const [currentChatId, setCurrentChatId] = useState(0)

    const newChat = {
        id: `${chats.length}`,
        recipient: 'Новый чат',
        messages: ['Пустой чат'],
    }

    const addChatHandler = () => {
        dispatch(addChatAC(newChat));
    }
    const removeChatHandler = () => {
        if (chats.length - 1 === 0) {
            alert("Нельзя удалить все чаты, пробую решить проблему")
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
                        }}
                    >{e.recipient}</Link>
                )}
                <button className="chats__list-button" onClick={addChatHandler}>Добавить чат</button>
                <button className="chats__list-button" onClick={removeChatHandler}>Удалить чат</button>
            </ul>
            <div className='chat__box'>
                <Chat id={currentChatId} messages={chats[currentChatId].messages} />
            </div>
        </div>
    )
}

const Chat = ({ id, messages }) => {
    // {
    //     currentChatId && chats[currentChatId] ?
    //         <h1>{chats[currentChatId].recipient}</h1> :
    //         <></>
    // }
    // {
    //     currentChatId && chats[currentChatId] ?
    //         <MessageForm data={messageItem} setData={setmessageItem} setMessage={setmessageList} /> :
    //         <h2>Выберите чат</h2>
    // }
    // {
    //     chatId && chats[chatId] ?
    //         <ul className='message__list'>
    //             {messageList.map((e, i) => <Message author={e.author} text={e.text} key={i}></Message>)}
    //         </ul> :
    //         <></>
    // }
    return (
        <>
            <MessageForm></MessageForm>
            <ul className='message__list'>
                {messages.map((e, id) => <Message text={e} key={id}></Message>)}
            </ul> :
            <></>
        </>
    )
}

export default Chats