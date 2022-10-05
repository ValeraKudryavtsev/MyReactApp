import './reset.css'
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

function App() {
  // Далее происходит что-то страшное...
  // Уже не так страшно

  return (
    <div className="App">
      <AppNav />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='profile' element={<Profile userName={"Valera"} userAge={20} />} />
        <Route path='chats' element={<Chats />}>
          <Route path=':chatId' element={<Chats />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

const AppNav = () => {
  return (
    <nav className='nav'>
      <Link className='nav__link' to={'/'}>Главная</Link>
      <Link className='nav__link' to={'/profile'}>Профиль</Link>
      <Link className='nav__link' to={'/chats'}>Чаты</Link>
    </nav>
  );
}

const MainPage = () => {
  return (
    <div className='mainPage'>
      <h1 className='mainPage__heading'>Начни общаться прямо сейчас!</h1>
    </div>
  )
}

const Profile = ({ userName, userAge }) => {
  return (
    <div className='userCard__wrap'>
      <div className='userCard'>
        <img className='userCard__img' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='avatar' />
        <div className='userCard__info'>
          <h2>{userName}</h2>
          <p>{userAge} years</p>
        </div>
      </div>
    </div>
  )
}

const chatsPlaceholder = [
  {
    recipient: "Robot 1"
  },
  {
    recipient: "Robot 2"
  },
]

const Chats = () => {
  const [messageList, setmessageList] = useState([]);
  const [messageItem, setmessageItem] = useState({
    author: '',
    text: ''
  });

  const [chats, setChats] = useState([]);
  const { chatId } = useParams();

  const robotMessage = 'Сообщение отправлено';

  useEffect(() => {
    setChats(chatsPlaceholder)
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setmessageList(p => [...p, { author: 'robot', text: robotMessage }])
      }, 1000);
    }
  }, [messageList]);

  return (
    <div className='chats__wrap'>
      <ul className='chats__list'>
        <ChatList chats={chats} />
      </ul>
      <div className='chat__box'>
        {
          chatId && chats[chatId] ?
            <h1>{chats[chatId].recipient}</h1> :
            <></>
        }
        {
          chatId && chats[chatId] ?
            <MessageForm data={messageItem} setData={setmessageItem} setMessage={setmessageList} /> :
            <h2>Выберите чат</h2>
        }
        {
          chatId && chats[chatId] ?
            <ul className='message__list'>
              {messageList.map((e, i) => <Message author={e.author} text={e.text} key={i}></Message>)}
            </ul> :
            <></>
        }
      </div>
    </div>
  )
}

/*------------------------------------------------------------------------------------------------------*/

const ChatList = ({ chats }) => {
  return (
    <>
      {chats.map((e, id) =>
        <Link className='nav__link' key={id} to={`${id}`}>{e.recipient}</Link>
      )}
    </>
  )
}

/*------------------------------------------------------------------------------------------------------*/

const ErrorPage = () => {
  return (
    <div className='mainPage'>
      <h1 className='mainPage__heading'>Что-то пошло не так...</h1>
    </div>
  )
}

const ColorButton = styled(Button)(() => ({
  backgroundColor: '#5620e4',
  height: '56px',
  width: '110px',
  '&:hover': {
    backgroundColor: '#672ef8',
  },
}));

const CustomTextField = styled(TextField)(() => ({
  width: '300px',
  marginRight: '15px',
  '& label.Mui-focused': {
    color: '#5620e4',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#5620e4',
    },
    '&:hover fieldset': {
      borderColor: '#672ef8',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5620e4',
    },
  },
}));

const MessageForm = ({ data, setData, setMessage }) => {
  const { author, text } = data;

  const submitForm = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      setMessage(p => [...p, { author, text }])
    }
    setData({
      author: '',
      text: ''
    })
  }

  return (
    <form className='messageForm__box' onSubmit={submitForm}>
      <CustomTextField
        autoFocus={true}
        id="outlined-name"
        label="Name"
        value={author}
        onChange={(el) =>
          setData(p => ({ ...p, author: el.target.value })
          )}
      />
      <CustomTextField
        id="outlined-text"
        label="Message"
        value={text}
        onChange={(el) =>
          setData(p => ({ ...p, text: el.target.value })
          )}
      />
      <ColorButton type='submit' variant="contained" endIcon={<SendIcon />}>
        Send
      </ColorButton>
    </form >
  )
}

const Message = (props) => {
  return (
    <li className='message__item'>
      <h3>{props.author}</h3>
      <h4 className='message__text'>{props.text}</h4>
    </li>
  );
}