import {ACTIONS} from './action-types'
import {requestGET, END_POINT} from './index'


export function discoverMovie(){
    return requestGET(`${END_POINT}/discoverMovie`, (dispatch, response) => {
        dispatch({type : ACTIONS.DISCOVERY_MOVIE, payload : response.data.results})
        if(response.data.results[0]){
            loadMovie(response.data.results[0].id)(dispatch)
        }
    }, (dispatch, error) => {
        dispatch({type : ACTIONS.DISCOVERY_MOVIE_FAILED})
    })
}

export function loadMovie(id){
    return requestGET(`${END_POINT}/movie/${id}`, (dispatch, response) => {
        dispatch({type : ACTIONS.TRAILER, payload : response.data})
    }, (dispatch, error) => {
        dispatch({type : ACTIONS.TRAILER_FAILED})
    })
}

export function recommendations(id){
    return requestGET(`${END_POINT}/movie/${id}/recommendations`, (dispatch, response) => {
        dispatch({type : ACTIONS.DISCOVERY_MOVIE, payload : response.data.results})
    }, (dispatch, error) => {
        dispatch({type : ACTIONS.DISCOVERY_MOVIE_FAILED})
    })
}