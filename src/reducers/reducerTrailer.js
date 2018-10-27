import {ACTIONS} from '../actions/action-types'

export default function reducerUser(state = null, action){
    switch(action.type){
        case ACTIONS.TRAILER :
            return action.payload
        case ACTIONS.TRAILER_FAILED :
            return null
    }
    return state
}