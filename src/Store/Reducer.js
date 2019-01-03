const initialState = {
    isAuthenticated: false,
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

    if (action.type === 'LOG_IN') {
        newState.isAuthenticated = true;
    }

    if (action.type === 'LOG_OUT') {
        newState.isAuthenticated = false;
    }

    return newState;
}

export default reducer;