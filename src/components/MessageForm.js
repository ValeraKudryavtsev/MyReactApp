import { ColorButton, CustomTextField } from '../myStyledMUI'
import SendIcon from '@mui/icons-material/Send';

const MessageForm = ({ data, setData, setMessage }) => {
    // const { message } = data;

    // const submitForm = (e) => {
    //     // сюда диспатч

    //     // e.preventDefault();
    //     // if (text.length > 0) {
    //     //     setMessage(p => [...p, { author, text }])
    //     // }
    //     // setData({
    //     //     author: '',
    //     //     text: ''
    //     // })
    // }

    return (
        <form className='messageForm__box'
        // onSubmit={submitForm}
        >
            <CustomTextField
                id="outlined-text"
                label="Message"
            // value={message}
            // onChange={(el) =>
            //     setData(p => ({ ...p, message: el.target.value })
            //     )}
            />
            <ColorButton type='submit' variant="contained" endIcon={<SendIcon />}>
                Send
            </ColorButton>
        </form >
    )
}

export default MessageForm