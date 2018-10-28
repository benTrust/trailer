import React, { Component } from 'react'
import {connect} from 'react-redux'
import {subComment} from '../actions/actionComment'
import {bindActionCreators} from 'redux'

class Comment extends Component{

    constructor(props){
        super(props)
        this.state = {comment: props.comment, comments: props.comments, commentRoot : props.commentRoot}
    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    render(){
        const {comment, comments} = this.state
        return(
            <div className = "list-group-item">
                <h3>{comment.user.login}</h3>
                <p>{comment.content}</p>
                <div>{formatDate(comment.date)}</div>
                {this.addButtonSubComment(comment)}
                {comments ? 
                    (
                    <div className = "subComments">
                        {comments.map(comment => {
                            return <Comment key = {comment.id} comment = {comment} commentRoot = {false} />
                        })}
                    </div> ) : ''}
            </div>
        )
    }

    addButtonSubComment(comment){
        if(!this.state.commentRoot){
            return
        }
        return <button type="button" className="btn btn-secondary" onClick = {(e) => this.props.subComment(comment)} >Réagir</button>
    }
}

function formatDate(date) {
    return date.substring(0, 10)
  }

function mapDispatchToProps(dispatch){
    return bindActionCreators({subComment}, dispatch)
}

export default connect(null, mapDispatchToProps)(Comment)