import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {postComment} from '../actions/actionComment'
import{reduxForm} from 'redux-form'

class PostComment extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {fields : {content}, handleSubmit, errors} = this.props
        return( 
            <div className = "postComment">
                <h3>Ajouter un commentaire</h3>
                <form onSubmit = {handleSubmit(this.postComment.bind(this))}>
                    <div className = {`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`} >
                        <label>Description</label>
                        <input className = "form-control" type = "text" {...content}/>
                        <div>{content.touched && errors.content}</div>
                    </div>
                    <button type = "submit" className = "btn btn-primary" disabled = {this.props.invalid}>Ajouter</button>
                </form>
                {this.InfoSubComment()}
            </div>
        )
    }

    postComment(comment){
        if(this.props.subComment){
            comment.idParent = this.props.subComment.id
        }
        this.props.postComment(comment, this.props.trailer.movieAPI.id)
    }

    InfoSubComment(){
        if(this.props.subComment){
            return(
            <div>
                En réponse à : {this.props.subComment.content}
            </div>)
        }
    }
    
}

const mapStateToProps = (state) => {
    return {
        trailer : state.trailer,
        subComment : state.subComment
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postComment}, dispatch)
}

function validate(values){
    const errors = {};
    if(!values.content){
        errors.content = "Veuillez remplir une description"
    }
    return errors
}

const formConfig = {
    form : 'postCommentForm',
    fields : ['content'],
    validate : validate
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(PostComment))