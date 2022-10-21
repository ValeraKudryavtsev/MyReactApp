import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/userSlice';

const AppNav = () => {
    const isAuth = useAuth()
    const dispatch = useDispatch()

    return isAuth.isAuth ? (
        <nav className='nav'>
            {/* Кнопка разлогина разлогин происходит локально в приложении без middleware через обычный редьюсер*/}
            <button className="chats__list-button" onClick={() => { dispatch(removeUser()) }}>Выйти из аккаунта</button>
            <Link className='nav__link' to={'/'}>Главная</Link>
            <Link className='nav__link' to={'/profile'}>Профиль</Link>
            <Link className='nav__link' to={'/chats'}>Чаты</Link>
            <Link className="nav__link" to={'/cats'}>Коты</Link>
        </nav>
    ) : (<></>)
}

export default AppNav