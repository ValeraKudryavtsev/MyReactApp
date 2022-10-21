import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const MainPage = () => {
    const isAuth = useAuth().isAuth

    return isAuth ? (
        <div className='mainPage'>
            <h1 className='mainPage__heading'>Начни общаться прямо сейчас!</h1>
        </div>
    ) : (<Navigate to={'/login'} />)
}

export default MainPage