import { createStore } from 'redux';

const FIRST_LOAD = 'main/FIRST_LOAD';

const loadFirst = () => ({ type: FIRST_LOAD, });

const initialState = {
    isLoad: false,
};

console.log('hihi hello');
console.log('added');
console.log('added 2');

console.log('develop');

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FIRST_LOAD:
            return {
                ...state,
                isLoad: true,
            };            

        default:
            return state;
    }
};

const store = createStore(reducer);