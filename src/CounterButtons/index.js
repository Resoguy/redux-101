import React from 'react';
import {connect} from 'react-redux';

const CounterButtons = ({dispatch}) => {
    return (
        <div>
            <button
                onClick={() => dispatch({type: 'DECREMENT'})}>
                - Decrement
            </button>
            <button
                onClick={() => dispatch({type: 'RESET'})}>
                Reset
            </button>
            <button
                onClick={() => dispatch({type: 'INCREMENT'})}>
                + Increment
            </button>
        </div>
    )
}

export default connect(null)(CounterButtons);
