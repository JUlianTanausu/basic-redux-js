/* eslint-disable import/no-anonymous-default-export */
const initalState =  { palabra: '' };

export default (state = initalState, action) => {
    if (action.type === 'UPDATE_WORD'){
        return {
            ...state,
            palabra: action.payload
        }
    }
    return state;
};

export const selectActiveWord = (state) => state.palabraReducer.palabra