import React, { Component } from 'react'
import {connect} from 'react-redux'
import Comment from './comment'

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
                    return <Comment key = {comment.id} comment = {comment} commentRoot = {true} comments = {comment.comments} />
                })}
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        trailer : state.trailer
    }
}

export default connect(mapStateToProps, null)(Comments)