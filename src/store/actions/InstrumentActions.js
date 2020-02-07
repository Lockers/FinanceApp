import {
    GETTING_INSTRUMENTS,
    GETTING_INSTRUMENTS_SUCCESS,
    GETTING_INSTRUMENTS_FAILURE,
} from './ActionTypes';

import axios from 'axios';

const baseUrl = 'https://api-fxpractice.oanda.com';
const header = {
    headers: {
        Authorization: 'Bearer f6aa4d97d4037baa352fb300ef2b5de8-9f3dfe4b3070926b883d9e09da0d008b',
    }
}

export const getInstruments = () => dispatch => {
    dispatch({ type: GETTING_INSTRUMENTS });
    axios
        .get(`${baseUrl}/v3/accounts/101-004-8897156-001/instruments`, header)
        .then(res => {
            dispatch({ type: GETTING_INSTRUMENTS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GETTING_INSTRUMENTS_FAILURE, payload: err.msg })
        })
}
