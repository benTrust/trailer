import React, { Component } from 'react'
import SignIn from '../containers/signIn'
import SignUp from '../containers/signUp'

class Sign extends Component{

    render(){
        return (
            <div className = "row">
                <div className = "col-md-6"><SignIn /></div>
                <div className = "col-md-6"><SignUp /></div>
            </div>
        )
    }
}

export default Sign