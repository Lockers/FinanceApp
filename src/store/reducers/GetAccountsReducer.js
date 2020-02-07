import {
    GETTING_ACCOUNT,
    GETTING_ACCOUNT_SUCCESS,
    GETTING_ACCOUNT_FAILURE,
} from '../actions/ActionTypes';

const initialState = {
    account: {},
    gettingAccount: false,
    error: null,
}

const getAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_ACCOUNT:
            return {
                ...state,
                gettingAccount: true
            };
        case GETTING_ACCOUNT_FAILURE:
            return {
                ...state,
                gettingAccount: false,
                error: action.payload
            };
        case GETTING_ACCOUNT_SUCCESS:
            return {
                ...state,
                gettingAccount: false,
                account: { ...state.account, ...action.payload }
            };
        default: return state;
    }
}
export default getAccountReducer;