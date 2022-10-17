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

export default Profile