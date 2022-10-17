const Message = ({ text }) => {
    return (
        <li className='message__item'>
            <h4 className='message__text'>{text}</h4>
        </li>
    );
}

export default Message