import axios from 'axios'
import {ACTIONS} from './action-types'

export const END_POINT = 'http://localhost:9090'

var userCurrent = null

function configUser(user){
    if(!user){
        return null
    }
    return {
        auth : {
            username: user.login,
            password: user.password
        }
    }
}

function getInfoError(error){
    const info = {}
    if(error.response){
        info.status = error.response.status
        if(error.response.data){
            info.message = error.response.data.message
        }
    }
    return info
}

function getInfoResponse(response){
    const info = {}
    if(response.data){
        info.status = response.data.status
        info.message = response.data.message
    }
    return info
}

export function requestGET(url, succes, error, data){
    return function(dispatch){
        axios.get(url, configUser(userCurrent)).then((response) => succes(dispatch, response, data))
            .catch((e) => error(dispatch, e, data))
    }
}

export function requestPOST(url, succes, error, data){
    return function(dispatch){
        axios.post(url, data, configUser(userCurrent)).then((response) => succes(dispatch, response, data))
            .catch((e) => error(dispatch, e, data))
    }
}

function successSignIn(dispatch, response, data){
    dispatch({type : ACTIONS.SIGN_IN, payload : data})
}

function errorSignIn(dispatch, error, data){
    dispatch({type : ACTIONS.SIGN_IN_FAILED, payload : {userFailed : data, sign : "in", info : getInfoError(error) }})
    userCurrent = null
}

export function signIn(user){
    userCurrent = user
    return requestGET(`${END_POINT}/user/${user.login}`, successSignIn, errorSignIn, user)
}

function succesSignUp(dispatch, response, data){
    if(response.status == 208){
        dispatch({type : ACTIONS.SIGN_UP_FAILED, payload : {userFailed : data, sign : "up", info : getInfoResponse(response) }})
        return
    }
    userCurrent = data
    dispatch({type : ACTIONS.SIGN_UP, payload : data})
}

function errorSignUp(dispatch, error, data){
    dispatch({type : ACTIONS.SIGN_UP_FAILED, payload : {userFailed : data, sign : "up", info : getInfoError(error) }})
}

export function signUp(user){
    userCurrent = null
    return requestPOST(`${END_POINT}/signUp`, succesSignUp, errorSignUp, user)
}