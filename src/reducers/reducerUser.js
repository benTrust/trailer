import {ACTIONS} from '../actions/action-types'

export default function reducerUser(state = null, action){
    switch(action.type){
        case ACTIONS.SIGN_IN :
        case ACTIONS.SIGN_UP :
            return action.payload
        case ACTIONS.SIGN_IN_FAILED :
        case ACTIONS.SIGN_UP_FAILED :
            return null
    }

    return state
}