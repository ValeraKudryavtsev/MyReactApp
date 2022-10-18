import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataThunk = createAsyncThunk(
    'fetchData',
    async function () {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?height=1445&limit=30&api_key=live_Gi9EesXZwvlKSW1t1l0ew5Qser18X0puo8kUREaSo1DHLrlQyxdmvMxfcZPshfVU')
        const data = response.json()
        return data
    }
)

const dataSlice = createSlice({
    name: 'cats',
    initialState: {
        data: [],
        loading: false,
        err: null
    },
    reducers: {

    },
    extraReducers: {
        [fetchDataThunk.pending]: (state, action) => {
            state.loading = true
            state.err = null
        },
        [fetchDataThunk.fulfilled]: (state, action) => {
            state.data = [...action.payload]
            state.loading = false
            state.err = null
        },
        [fetchDataThunk.rejected]: (state, action) => {
            state.err = true
        }
    }
})

export const { } = dataSlice.actions
export const dataReducer = dataSlice.reducer