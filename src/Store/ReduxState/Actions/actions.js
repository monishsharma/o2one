import * as actionTypes from './ActionTypes';

export const hanleOnChangeEvent = (event,id) => {
    return{
        type : actionTypes.INPUT_ONCHANGE,
        event:event,
        id:id
    }
}

export const addMoreHobbies = (event,id,count) => {
    return{
        type : actionTypes.ADD_EXTRA_HOBBIES,
        event:event,
        id:id,
        count:count
    }
}


export const SaveUsers = (payload) => {
    return{
        type : actionTypes.SAVE_USER_DATA,
        userData:payload
    }
}