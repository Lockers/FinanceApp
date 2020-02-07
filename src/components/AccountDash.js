import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAccounts } from '../store/actions/AccountActions';

export const AccountDash = () => {

    const [account, setAccount] = useState()
    const [updateAccount, setUpdateAccount] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAccounts())

    }, [dispatch, updateAccount])

    const accounts = useSelector(state => state)
    if (!accounts.getAccountReducer.account.account) {
        return <div>Loading</div>
    }

    return (
        <div>
            <button>{accounts.getAccountReducer.account.account.createdTime}</button>
            <button>{accounts.getAccountReducer.account.account.id}</button>
            <button>{accounts.getAccountReducer.account.account.currency}</button>
            <button>{accounts.getAccountReducer.account.account.marginRate}</button>
            <button>{accounts.getAccountReducer.account.account.balance}</button>
            <button>{accounts.getAccountReducer.account.account.openTradeCount}</button>
            <button>{accounts.getAccountReducer.account.account.openPositionCount}</button>
            <button>{accounts.getAccountReducer.account.account.pendingOrderCount}</button>
            <button>{accounts.getAccountReducer.account.account.pl}</button>
            <button>{accounts.getAccountReducer.account.account.orders[0]}</button>
            <button>{accounts.getAccountReducer.account.account.trades[0]}</button>
            <button>{accounts.getAccountReducer.account.account.unrealizedPL}</button>
            <button>{accounts.getAccountReducer.account.account.marginUsed}</button>
            <button>{accounts.getAccountReducer.account.account.marginAvailable}</button>
            <button>{accounts.getAccountReducer.account.account.positionValue}</button>
            <h1>Trades</h1>
            {accounts.getAccountReducer.account.account.positions.map(position => {
                return (
                    <div>
                        <button>{position.instrument}</button>
                        <button>{position.long.units}</button>
                        <button>{position.long.pl}</button>
                        <button>{position.long.unrealizedPL}</button>
                        <button>{position.short.units}</button>
                        <button>{position.short.pl}</button>
                        <button>{position.short.unrealizedPL}</button>
                    </div>
                )
            })}
        </div>
    )
}