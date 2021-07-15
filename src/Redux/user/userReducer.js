import {NEW_USER} from './userAction'

const InitialUser={
    name:null,
    email:null,
    photo:null
}

export const UserReducer=(state=InitialUser,action)=>{

    switch(action.type){
        case NEW_USER:return{
            ...InitialUser,
            name:action.payload.name,
            email:action.payload.email,
            photo:action.payload.photo
        }
        default:return state
    }
}