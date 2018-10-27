import {ACTIONS} from '../actions/action-types'

export default function reducerUser(state = [], action){
    switch(action.type){
        case ACTIONS.SEARCH_TRAILER :
            return action.payload
        case ACTIONS.SEARCH_TRAILER_FAILED :
        case ACTIONS.TRAILER :
            return []
    }
    return state
}