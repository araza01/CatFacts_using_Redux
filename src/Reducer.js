const defaultState = {
    isLoaded: false,
    error: null,
    items: []
}

const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => {
    return {
        type: REQUESTING_DATA
    }
}
const receivedData = (data) => {
    return {
        type: RECEIVED_DATA,
        items: data
    }
}

export const handleData = () => {
    return function(dispatch) {
        dispatch(requestingData());
        fetch("https://cat-fact.herokuapp.com/facts/random?amount=5")
        .then(response => response.json())
        .then((result) => {
            dispatch(receivedData(result));
        }).catch((error) => {
            dispatch(requestingData());
        })
    }
}

export const dataReducer = (state = defaultState, action) => {
    switch(action.type) {
        case REQUESTING_DATA:
            return {
                ...state,
                isLoaded: true,
                items: []
            }
        case RECEIVED_DATA:
            return {
                ...state,
                isLoaded: false,
                items: action.items
            }
        default:
            return state;
    }
}
