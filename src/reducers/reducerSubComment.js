import {ACTIONS} from '../actions/action-types'

export default function reducerUser(state = null, action){
    switch(action.type){
        case ACTIONS.SUB_COMMENT :
            return action.payload
        case ACTIONS.POST_COMMENT :
        case ACTIONS.TRAILER :
            return null
    }
    return state
}