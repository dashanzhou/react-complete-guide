const initialState = {
    number: 21
};

const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    if (action.type === 'NUMBER_UP') {
        newState.number++;
    }

    if (action.type === 'NUMBER_DOWN') {
        newState.number--;
    }

    return newState;
}

export default reducer;