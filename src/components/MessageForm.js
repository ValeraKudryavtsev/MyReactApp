import { ColorButton, CustomTextField } from '../myStyledMUI'
import SendIcon from '@mui/icons-material/Send';
import { useSelector, useDispatch } from 'react-redux';
import Message from './Message'
import { getMessageState } from './selectors';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const MessageForm = () => {
    const [text, setText] = useState("");
    const messages = useSelector(getMessageState)
    const id = useParams()
    const dispatch = useDispatch();
    const sendHandler = () => {
        const obj = {
            id: id,
            text: text,
        }
        console.log(obj)
        dispatch({ type: "SEND_MESSAGE", payload: obj })
        const robotAnswer = {
            id: id,
            text: "Robot: Сообщение отправлено"
        }
        setTimeout(() => {
            dispatch({ type: "SEND_MESSAGE", payload: robotAnswer })
        }, 2000)
    }

    return (
        <>
            <div className='messageForm__box'>
                <CustomTextField
                    id="outlined-text"
                    label="Message"
                    value={text}
                    onChange={(el) => { setText(el.target.value) }}
                />
                <ColorButton type='button' variant="contained" endIcon={<SendIcon />} onClick={sendHandler}>
                    Send
                </ColorButton>
            </div >
            <ul className='message__list'>
                {messages.map((e, id) => <Message text={e.text} key={id}></Message>)}
            </ul>
        </>
    )
}

export default MessageForm