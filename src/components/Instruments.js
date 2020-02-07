import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInstruments } from '../store/actions/InstrumentActions';
export const GetInstruments = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInstruments())
    }, [dispatch])
    const instruments = useSelector(state => state)

    if (!instruments) {
        return <div>Loading</div>
    }
    return (
        <div>Instruments</div>
    )
}