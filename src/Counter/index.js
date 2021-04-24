import React from 'react';
import {connect} from 'react-redux';

const Counter = ({count}) => {

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);
