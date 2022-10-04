import './App.css';
import { TextField } from "@material-ui/core";
import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

function App() {
  // Далее происходит что-то страшное...

  const [messageList, setmessageList] = useState([]);
  const [messageItem, setmessageItem] = useState({
    author: '',
    text: ''
  });

  const robotMessage = 'Сообщение отправлено';

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setmessageList(p => [...p, { author: 'robot', text: robotMessage }])
      }, 1000);
    }
  }, [messageList]);

  return (
    <div className="App">
      <MessageForm data={messageItem} setData={setmessageItem} setMessage={setmessageList}></MessageForm>
      <div>
        {messageList.map((e, i) => <Message author={e.author} text={e.text} key={i}></Message>)}
      </div>
    </div>
  );
}

export default App;

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
    <form onSubmit={submitForm}>
      <TextField
        className='inputStyle'
        autoFocus={true}
        id="outlined-name"
        label="Name"
        variant="outlined"
        value={author}
        onChange={(el) =>
          setData(p => ({ ...p, author: el.target.value })
          )}
      />
      <TextField
        className='inputStyle'
        id="outlined-text"
        label="Message"
        variant="outlined"
        value={text}
        onChange={(el) =>
          setData(p => ({ ...p, text: el.target.value })
          )}
      />
      <Button type='submit' variant="contained" style={{ margin: '20px', color: 'white', backgroundColor: '#5620e4', height: '40px' }}>Send</Button>
    </form >
  )
}

const Message = (props) => {
  return (
    <div className='testClass'>
      <h3>{props.author}</h3>
      <h4>{props.text}</h4>
    </div>
  );
}