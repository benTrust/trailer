import {ACTIONS} from './action-types'
import {requestPOST, END_POINT} from './index'

export function postComment(comment, idMovieExterne){
    return requestPOST(`${END_POINT}/movie/${idMovieExterne}/comment`, (dispatch, response) => {
        dispatch({type : ACTIONS.POST_COMMENT, payload : response.data})
    }, (dispatch, error) => {
        dispatch({type : ACTIONS.POST_COMMENT_FAILED})
    }, comment)
}

export function subComment(commentParent){
    return function(dispatch){
        dispatch({type : ACTIONS.SUB_COMMENT, payload : commentParent})
    }
}