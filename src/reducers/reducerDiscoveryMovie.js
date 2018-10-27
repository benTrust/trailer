import {ACTIONS} from '../actions/action-types'

export default function reducerUser(state = [], action){
    switch(action.type){
        case ACTIONS.DISCOVERY_MOVIE :
            return action.payload
        case ACTIONS.DISCOVERY_MOVIE_FAILED :
            return []
    }
    return state
}