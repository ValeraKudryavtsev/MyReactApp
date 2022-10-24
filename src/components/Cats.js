import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { fetchDataThunk } from '../redux/dataSlice'
import { ColorButton } from '../myStyledMUI'
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const Cats = () => {
    const isAuth = useAuth().isAuth

    const { data, loading, err } = useSelector(state => state.data)
    const dispatch = useDispatch()

    console.log(data, loading, err)

    useEffect(() => {
        dispatch(fetchDataThunk())
        // console.log(err)
    }, []);

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         fetch(CATS_URL)
    //             .then(resp => resp.json())
    //             .then(data => {
    //                 setData(data)
    //                 console.log(data)
    //                 // dispatch(fetchCats(data))
    //             })
    //             .catch(err => setError(err))
    //             .finally(() => {
    //                 setLoading(false)
    //             })
    //     }, 1000)
    // }, []);

    return isAuth ? (
        <div className="cats__output">
            <h1>Cats</h1>
            {loading ? <Loader /> :
                <div>
                    {
                        data.map((e) => <img style={{ height: "250px" }} key={e.id} src={e.url} alt={e.id} />)
                    }
                </div>
            }
            {err ?
                <div>
                    Что-то пошло не так...
                    <ColorButton type='button' variant="contained" onClick={() => {
                        dispatch(fetchDataThunk())
                    }}>
                        Reload
                    </ColorButton>
                </div> :
                <></>}
        </div>
    ) : (<Navigate to={'/login'} />)
}

export default Cats