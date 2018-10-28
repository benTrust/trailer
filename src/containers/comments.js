import React, { Component } from 'react'
import {connect} from 'react-redux'
import Comment from '../components/comment'
import {subComment} from '../actions/actionComment'
import {bindActionCreators} from 'redux'

class Comments extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const comments = this.props.trailer && this.props.trailer.movie && this.props.trailer.movie.comments ? this.props.trailer.movie.comments : null
        
        if(!comments){
            return <div></div>
        }

        return(
            <div>
                {comments.map(comment => {
                    return <Comment key = {comment.id} comment = {comment} commentRoot = {true} comments = {comment.comments} subComment = {this.subComment.bind(this)} />
                })}
            </div>)
    }

    subComment(comment){
        this.props.subComment(comment)
    }
}

const mapStateToProps = (state) => {
    return {
        trailer : state.trailer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({subComment}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)