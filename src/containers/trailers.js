import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {discoverMovie, loadMovie} from '../actions/actionTrailer'
import TrailerList from './trailerList'
import Trailer from './trailer'
import SearchBar from './searchBar'
import Comments from './comments'
import MenuBar from '../components/menuBar'
import PostComment from './postComment'

class Trailers extends Component{

    componentWillMount(){
        this.props.discoverMovie()
    }

    render(){
        return (
            <div>
                <MenuBar current = "trailers" />
                <section className = "row trailers">
                    <article className = "col-md-8">
                        <SearchBar />
                        {this.renderTrailer()}
                    </article>
                    <aside className = "col-md-4"><TrailerList /></aside>
                </section>
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