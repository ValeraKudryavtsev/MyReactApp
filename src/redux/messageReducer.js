const initialState = []

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND_MESSAGE": {
            return [...state, action.payload]
        }
        default:
            return state
    }
}