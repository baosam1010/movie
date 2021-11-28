import *as Types from '../constant/actionTypes';

export const getPosts = ()=>({
    type: Types.GET_POST,
})

export const addPost = (post)=>({
    type: Types.ADD_POST,
    payload: {
        ...post    },
  });

export const addPostSuccess = (data)=>{
    return {
        type: Types.ADD_POST_SUCCESS,
        data
    }
}