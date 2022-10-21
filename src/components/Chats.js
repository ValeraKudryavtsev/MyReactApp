import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import MessageForm from "./MessageForm";
import { addChatAC, removeChatAC } from "../redux/chatActions";
import { getChatsState, getMessageState } from "./selectors";
import Message from './Message'
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { getAllMessages } from "../firebase/crud";
import { useEffect } from "react";

const Chats = () => {
    const isAuth = useAuth()

    const chats = useSelector(getChatsState)
    const dispatch = useDispatch()

    const messages = useSelector(getMessageState)

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

    // стейты для получения данных из firestore (без middleware)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState()


    const [formData, setFormData] = useState({
        body: '',
        user: ''
    })

    //функция обрабатывающая загруженные данные о постах и добавляющая их в data state
    const getMessagesHandler = async () => {
        setLoading(true)
        let data = await getAllMessages()
        setLoading(false)
        setData(data)
    }

    //сайд эффект(загрузка постов при монтировании компонента)
    useEffect(() => {
        getMessagesHandler()
    }, [])

    return isAuth.isAuth ? (
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
                <MessageForm formData={formData} setFormData={setFormData} getMessagesHandler={getMessagesHandler} />
                <ul className='message__list'>
                    {data.map((e, i) =>
                        e.user === isAuth.email ?
                            <div key={i}>
                                <p>{e.body}</p>
                                <hr />
                            </div> :
                            null
                    )}
                    {messages.map((e, id) => <Message text={e.text} key={id}></Message>)}
                </ul>
            </div>
        </div>
    ) : (<Navigate to={'/login'} />)
}

export default Chats