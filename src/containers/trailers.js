import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {discoverMovie, loadMovie} from '../actions/actionTrailer'
import TrailerList from './trailerList'
import Trailer from './trailer'
import SearchBar from './searchBar'
import Comments from './comments'
import PostComment from './postComment'

class Trailers extends Component{

    componentWillMount(){
        this.props.discoverMovie()
    }

    render(){
        return (
            <div className = "row trailers">
                <div className = "col-md-8">
                    <SearchBar />
                    {this.renderTrailer()}
                </div>
                <div className = "col-md-4"><TrailerList /></div>
            </div>
        )
    }

    renderTrailer(){
        if(!this.props.trailer){
            return <div></div>
        }
        
        return (
            <div>
                <Trailer />
                <Comments /> 
                <PostComment />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trailer : state.trailer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({discoverMovie, loadMovie}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trailers)