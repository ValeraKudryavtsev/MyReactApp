import { ADD_CHAT, REMOVE_CHAT } from "./chatActions";

const initialState = [
    {
        id: '0',
        recipient: 'Steve',
        messages: ['c1', 'c2']
    },
    {
        id: '1',
        recipient: 'Leo',
        messages: ['a1', 'a2', 'a3']
    },
    {
        id: '2',
        recipient: 'Anna',
        messages: []
    },
]

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return [...state, action.payload]
        }
        case REMOVE_CHAT: {
            return [...state.filter((e, i) => i < state.length - 1)]
        }
        default:
            return state
    }
}