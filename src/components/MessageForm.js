import { ColorButton, CustomTextField } from '../myStyledMUI'
import SendIcon from '@mui/icons-material/Send';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
// import Message from './Message'
// import { getMessageState } from './selectors';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { addMessage } from '../firebase/crud';

const MessageForm = ({ formData, setFormData, getMessagesHandler }) => {
    const [text, setText] = useState("");
    // const messages = useSelector(getMessageState)
    const id = useParams()
    const dispatch = useDispatch();

    const user = useAuth().email

    const sendHandler = () => {
        addMessage(formData)
        getMessagesHandler()
    }
    const resetHandler = () => {
        dispatch({ type: "RESET" })
    }

    return (
        <>
            <form className='messageForm__box'>
                <CustomTextField
                    id="outlined-text"
                    label="Message"
                    value={formData.body}
                    onChange={(e) => { setFormData({ user, body: e.target.value }) }}
                />
                <ColorButton type='button' variant="contained" onClick={sendHandler} endIcon={<SendIcon />}>
                    Send
                </ColorButton>
                {/* <ColorButton type='button' variant="contained" onClick={resetHandler}>
                    Clear
                </ColorButton> */}
            </form >
            {/* <ul className='message__list'>
                {messages.map((e, id) => <Message text={e.text} key={id}></Message>)}
            </ul> */}
        </>
    )
}

export default MessageForm