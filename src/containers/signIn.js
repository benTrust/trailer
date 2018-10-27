import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signIn} from '../actions/index'
import{reduxForm} from 'redux-form'
import {browserHistory} from 'react-router'

class SignIn extends Component{

    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.userConnect()
    }

    componentDidUpdate(){
        this.userConnect()
    }

    userConnect(){
        if(this.props.user){
            browserHistory.push('/trailers')
            return
        }
    }

    render(){
        const {fields : {login, password}, handleSubmit, errors} = this.props
        return (
            <div>
                <h1>Se connecter</h1>
                <form onSubmit = {handleSubmit(this.props.signIn.bind(this))}>
                    <div className = {`form-group ${login.touched && login.invalid ? 'has-danger' : ''}`} >
                        <label>Identifiant</label>
                        <input className = "form-control" type = "text" {...login}/>
                        <div>{login.touched && errors.login}</div>
                    </div>
                    <div className = {`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`} >
                        <label>Mot de passe</label>
                        <input className = "form-control" type = "password" {...password}/>
                        <div>{password.touched && errors.password}</div>
                    </div>
                    <div>{this.getInfoErrorIfHas()}</div>
                    <button type = "submit" className = "btn btn-primary" disabled = {this.props.invalid}>Se connecter</button>
                </form>
            </div>
        )
    }

    getInfoErrorIfHas(){
        if(this.props.userFailed && this.props.userFailed.sign == 'in'){
            if(this.props.userFailed.info.message){
                return this.props.userFailed.info.message
            }
            return "Login ou mot de passe invalide"
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        userFailed : state.userFailed
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({signIn}, dispatch)
}

function validate(values){
    const errors = {};
    if(!values.login){
        errors.login = "Veuillez remplir le login"
    }
    if(!values.password){
        errors.password = "Veuillez remplir un mot de passe"
    }
    return errors
}

const formConfig = {
    form : 'signInForm',
    fields : ['login', 'password'],
    validate : validate
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(SignIn))