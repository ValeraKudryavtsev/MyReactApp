import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { fetchDataThunk } from '../redux/dataSlice'
import { ColorButton } from '../myStyledMUI'

const Cats = () => {
    // const CATS_URL = 'https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_Gi9EesXZwvlKSW1t1l0ew5Qser18X0puo8kUREaSo1DHLrlQyxdmvMxfcZPshfVU'

    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

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

    return (
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
    )
}

export default Cats