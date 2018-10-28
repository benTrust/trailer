import React from 'react'

export default Comment = function(props){
    const {comment, comments} = props
    return (
        <div className = "list-group-item">
            <h3>{comment.user.login}</h3>
            <p>{comment.content}</p>
            <div>{formatDate(comment.date)}</div>
            {addButtonSubComment(comment, props)}
            {comments ? 
                (
                <div className = "subComments">
                    {comments.map(subComment => {
                        return <Comment key = {subComment.id} comment = {subComment} commentRoot = {false} />
                    })}
                </div> ) : ''
            }
        </div>
    )
}

function addButtonSubComment(comment, props){
    if(!props.commentRoot){
        return
    }
    return <button type="button" className="btn btn-secondary" onClick = {(e) => props.subComment(comment)} >Réagir</button>
}

function formatDate(date) {
    return date.substring(0, 10)
}