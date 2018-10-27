import React, { Component } from 'react'
import {connect} from 'react-redux'
import Video from '../components/video'
import VideoDetail from '../components/videoDetail'

class Trailer extends Component{

    render(){
        const {trailer} = this.props
        if(!trailer){
            return <div></div>
        }
        var  videoID = null
        if(trailer.movieAPI.videos && trailer.movieAPI.videos.results[0]){
            videoID = trailer.movieAPI.videos.results[0].key
        }
        return (
            <div>
                <Video videoId = {videoID} />
                <VideoDetail title = {trailer.movieAPI.title} description = {trailer.movieAPI.overview} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trailer : state.trailer
    }
}

export default connect(mapStateToProps, null)(Trailer)