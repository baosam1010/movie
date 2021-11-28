import *as Types from './../constant/actionTypes';

var data = JSON.parse(localStorage.getItem('Post'));
var initialState = data ? data : [{name:"sam", email:"haha123@gmail.com", textarea:"hello"}];

const PostReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Types.GET_POST:

            return state
        case Types.ADD_POST:
            // console.log('addaction.post', action.payload)
            // state.push(action.payload)

            // console.log('state_POST_REDUCER:',state)
            return state;

        case Types.ADD_POST_SUCCESS:
            const {payload} = action.data;
            // console.log('actionADDSuccess:', action.data)
            state.push(payload)
            return state
        default: return state;
    }
};

export default PostReducer;



