import {
    GETTING_INSTRUMENTS,
    GETTING_INSTRUMENTS_SUCCESS,
    GETTING_INSTRUMENTS_FAILURE,
} from '../actions/ActionTypes';

const initialState = {
    instruments: [],
    gettingInstruments: false,
    error: null,
}

const getInstrumentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_INSTRUMENTS:
            return {
                ...state,
                gettingInstruments: true
            };
        case GETTING_INSTRUMENTS_FAILURE:
            return {
                ...state,
                gettingInstruments: false,
                error: action.payload
            };
        case GETTING_INSTRUMENTS_SUCCESS:
            return {
                ...state,
                gettingInstruments: false,
                instruments: [...state.instruments, ...action.payload]
            };
        default: return state;
    }
}
export default getInstrumentsReducer;