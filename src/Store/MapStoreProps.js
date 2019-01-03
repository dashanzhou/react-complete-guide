
const MapStoreProps = (state, dispatch) => {

    const mapDispatchToProps = (dispatch) => {
        return {
            onNumberUp: () => dispatch({type: 'NUMBER_UP'}),
            onNumberDown: () => dispatch({type: 'NUMBER_DOWN'}),
            onLoggedIn: () => dispatch({type: 'LOGIN'}),
            onLoggedOut: () => dispatch({type: 'LOGOUT'})
        }
    };
    
    const mapStateToProps = (state) => {
        return {
            number: state.number,
            isAuthenticated: state.isAuthenticated
        }
    };
}

export default MapStoreProps;