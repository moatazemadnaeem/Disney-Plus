import {SET_MOVIE} from './movieActions'

const InitialMovieState={
    movies:null
}

export const movieReducer=(state=InitialMovieState,action)=>{

        switch(action.type){
            case SET_MOVIE:return {
                ...InitialMovieState,
                movies:action.payload
            }
            default:return state
        }
}


