export const NEW_USER='NEW_USER';

export const newUser=(data)=>{
    return{
         type:NEW_USER,
         payload:data
    }
}