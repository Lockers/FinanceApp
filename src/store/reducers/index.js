import { combineReducers } from 'redux';
import getInstrumentReducer from './GetInstrumentReducer';
import getAccountReducer from './GetAccountsReducer';

export const reducer = combineReducers({
    getInstrumentReducer,
    getAccountReducer,
})