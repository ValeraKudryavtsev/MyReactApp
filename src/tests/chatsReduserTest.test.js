import { chatsReducer, initialState } from "../redux/chatsReducer";
import { ADD_CHAT, REMOVE_CHAT, RESET } from "../redux/chatActions";

describe('chatsReduserTest', () => {
    it('ADD_CHAT', () => { // it - блок, конкретного unit-теста 
        const action = {
            type: ADD_CHAT,
            payload: {
                id: '4',
                recipient: 'Peter',
            }
        }

        expect(chatsReducer(initialState, action)).toEqual([...initialState, action.payload])
    })

    it('REMOVE_CHAT', () => {
        const action = {
            type: REMOVE_CHAT,
        }

        expect(chatsReducer(initialState, action)).toEqual([...initialState.filter((e, i) => i < initialState.length - 1)])
    })

    it('RESET', () => {
        const action = {
            type: RESET,
        }

        expect(chatsReducer(initialState, action)).toEqual(initialState)
    })
});
