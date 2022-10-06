import { useDispatch, useSelector } from "react-redux"

const ProfileToggler = () => {
    //redux
    const isChecked = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(isChecked);
    return (
        <>
            <input type='checkbox' value={isChecked} onChange={() => {
                dispatch({ type: 'SWITCH_TOGGLE' });//передается объект
            }} />
        </>
    )
}

export default ProfileToggler