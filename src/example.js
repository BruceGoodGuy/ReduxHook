var redux = require('redux');
var defaultState = {mang: ['Android', 'IOS', 'nodeJS'], show: false};

var mangReducer = (state = ['Android', 'IOS', 'nodeJS', "conheo", "con cho"], action) => {
    switch (action.type) {
        case 'ADD_ITEM': 
            return [...state, action.item]
        case 'REMOVE_ITEM':
            return state.filter((e, i)=>i!=action.index)
        default: 
            return state;
    }
}

var isAddingReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_ADDING': 
            return !state; break;
        default: 
            return state;
    }
}

var reducer = redux.combineReducers({
    mang: mangReducer,
    isAdding: isAddingReducer
})

var store = redux.createStore(reducer, redux.compose(
    window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__(): f=>f
));

store.subscribe(f=>f)

export default store
