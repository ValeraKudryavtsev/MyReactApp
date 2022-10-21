import './reset.css';
import './App.css';
// import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import AppNav from './components/AppNav';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile'
import Chats from './components/Chats';
import Cats from './components/Cats';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import { addUser, createUserThunk, loginThunk, removeUser } from './redux/userSlice';
import { addPost, getAllPosts } from './firebase/crud';

function App() {
  return (
    <div className="App">
      <AppNav />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='profile' element={<Profile userAge={20} />} />
        <Route path='chats' element={<Chats />}>
          <Route path=':chatId' element={<Chats />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
        <Route path="/cats" element={<Cats />} />
        <Route path='/login' element={<LoginView />} />
      </Routes>

      {/* <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/login' element={<LoginView />} />
        <Route path='/list' element={<DataList />} />
      </Routes> */}
    </div>
  );
}

export default App;


//СТРАНИЦА ЛОГИНА
const LoginView = () => {
  //хук для отслеживания аутентификации
  const isAuth = useAuth().isAuth

  //стейты для инпутов
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const dispatch = useDispatch()

  //если не аутентифицироват - возвращаем форму иначе Navigate to 
  return !isAuth ? (
    <div style={authStyles().container}>
      <h1>Логин</h1>

      <div style={authStyles().card}>
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e) => { setEmail(e.target.value) }} />

        <input
          type='password'
          placeholder='password'
          value={pass}
          onChange={(e) => { setPass(e.target.value) }} />

        <div>
          <button onClick={() => {
            dispatch(createUserThunk({ email, pass }))
          }
          }>Регистрация</button>

          <button onClick={() => {
            dispatch(loginThunk({ email, pass }))
          }
          }>Войти</button>
        </div>
      </div>
    </div>
  ) :
    (<Navigate to={'/'} />)
}

//Функция для стилизации, чтобы не хранить стили в jsx и не перегружать код компонента
const authStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5',
    height: '100vh'
  },
  card: {
    padding: '30px',
    borderRadius: '30px',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100px'
  }
})

//ГЛАВНАЯ
const HomeView = () => {
  return (
    <div>
      <h1>Домашняя страница</h1>
      <Navigate to={'/login'} />
    </div>
  )
}