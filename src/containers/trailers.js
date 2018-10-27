import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {discoverMovie, loadMovie} from '../actions/actionTrailer'
import TrailerList from './trailerList'
import Trailer from './trailer'

class Trailers extends Component{

    componentWillMount(){
        this.props.discoverMovie()
    }

    render(){
        return (
            <div className = "row">
                <div className = "col-md-8"><Trailer /></div>
                <div className = "col-md-4"><TrailerList /></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listTrailer : state.discoveryMovie,
        trailer : state.trailer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({discoverMovie, loadMovie}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trailers)