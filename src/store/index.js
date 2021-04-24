import {createStore} from 'redux';

const reducer = (state, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};

        case 'DECREMENT':
            return {count: state.count - 1};

        case 'RESET':
            return {count: 0};

        default:
            return state;
    }

}

const initialState = {
    count: 1
}

const store = createStore(reducer, initialState);

export default store;
