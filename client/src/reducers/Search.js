import *as Types from '../constant/actionTypes';

var data = JSON.parse(localStorage.getItem('SEARCH'));
var initialState = data ? data : {search:''};

const Search = (state = initialState, action) => {
    switch (action.type) {

        case Types.SEARCH:
            // const {payload} = action;
            return state;
        case Types.ADD_SEARCH_SUCCESS:
            // const { payload } = action.data;
            console.log('action_ADD_Success:', action.search)
            // state= Object.assign({...state,...action.search})
            let newObject = Object.assign(state,action.search);
            return newObject
        default: return state;
    }
}


export default Search;
