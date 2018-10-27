import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {recommendations, loadMovie} from '../actions/actionTrailer'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

class TrailerItem extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <li className = "list-group-item trailerItem" onClick = {(e) => {
                                                    this.props.loadMovie(this.props.trailer.id)
                                                    this.props.recommendations(this.props.trailer.id)
                                                    }}>
                <div className = "media">
                    <div  className = "media-left">
                        <img className = "media-object img-rounded" height="100px" width="100px" src={`${IMAGE_BASE_URL}${this.props.trailer.poster_path}`} />
                    </div>
                    <div  className = "media-body">
                        <h5 className = "title_list_item">{this.props.trailer.title}</h5>
                    </div>
                </div>
            </li>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({recommendations, loadMovie}, dispatch)
}

export default connect(null, mapDispatchToProps)(TrailerItem)