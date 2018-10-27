import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {discoverMovie, loadMovie} from '../actions/actionTrailer'
import TrailerList from './trailerList'
import Trailer from './trailer'
import SearchBar from './searchBar'

class Trailers extends Component{

    componentWillMount(){
        this.props.discoverMovie()
    }

    render(){
        return (
            <div className = "row trailers">
                <div className = "col-md-8">
                    <SearchBar />
                    <Trailer />
                </div>
                <div className = "col-md-4"><TrailerList /></div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({discoverMovie, loadMovie}, dispatch)
}

export default connect(null, mapDispatchToProps)(Trailers)