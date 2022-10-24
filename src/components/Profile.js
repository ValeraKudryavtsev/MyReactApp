import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const Profile = ({ userAge }) => {
    const isAuth = useAuth()

    return isAuth.isAuth ? (
        <div className='userCard__wrap'>
            <div className='userCard'>
                <img className='userCard__img' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='avatar' />
                <div className='userCard__info'>
                    <h2>{isAuth.email}</h2>
                    <p>{userAge} years</p>
                </div>
            </div>
        </div>
    ) : (<Navigate to={'/login'} />)
}

export default Profile