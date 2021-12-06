import *as Types from '../constant/actionTypes';

export const addSearch = (search)=>{
    return {
        type: Types.SEARCH,
        payload: {
            ...search
        }
    }
}

export const addSearchSuccess = (search)=>{
    return {
        type: Types.ADD_SEARCH_SUCCESS,
        search
    }
}



