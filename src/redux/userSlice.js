import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// THUNK для создания пользователя при регистрации
export const createUserThunk = createAsyncThunk(
    'user/addUserThunk',
    async ({ email, pass }) => {
        try {
            const userCredit = await createUserWithEmailAndPassword(auth, email, pass)
            console.log(userCredit.user)
            //ответ от firebase при успешно выполнение запроса
            const userData = {
                email: userCredit.user.email,
                id: userCredit.user.uid,
                token: userCredit.user.accessToken
            }
            return userData
        } catch (e) {
            console.log(e.code, e.message)
        }
    }
)

// THUNK для входа в систему если юзер уже зарегистрирован
export const loginThunk = createAsyncThunk(
    'user/loginThunk',
    async ({ email, pass }) => {
        try {
            const userCredit = await signInWithEmailAndPassword(auth, email, pass)
            const userData = {
                email: userCredit.user.email,
                id: userCredit.user.uid,
                token: userCredit.user.accessToken
            }
            return userData
        } catch (e) {
            console.log(e.code, e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        token: null,
        id: null
    },
    reducers: {
        addUser: (state, action) => {
            return state = action.payload
        },
        removeUser: (state) => {
            state.email = null
            state.token = null
            state.id = null
        }
    },
    //редьюсеры для thunk функций
    extraReducers: {
        [createUserThunk.fulfilled]: (state, action) => {
            return state = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            return state = action.payload
        }

    }
})

export const { addUser, removeUser } = userSlice.actions
export const userReducer = userSlice.reducer