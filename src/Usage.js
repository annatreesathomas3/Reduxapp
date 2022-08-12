import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Usage() {
    const value = useSelector((state) => {
        return state.value;
    });
    console.log(value);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: 'increment'
                })
            }}>
                Increment </button>&nbsp;
            <label>{value}</label>&nbsp;
            <button onClick={() => {
                dispatch({
                    type: 'decrement'
                })
            }}>
                Decrement</button>
        </div>
    )
}

export default Usage;