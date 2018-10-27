import React, { Component } from 'react'
import {connect} from 'react-redux'
import TrailerItem from './trailerItem'

class TrailerList extends Component{

    render(){
        if(!this.props.listTrailer || !this.props.listTrailer[0]){
            return <div>Recommendation non disponible</div>
        }
        return (
            <ul>
                {
                    this.props.listTrailer.map(trailer =>{
                        return (
                            <TrailerItem key = {trailer.id} trailer = {trailer} />
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listTrailer : state.discoveryMovie
    }
}

export default connect(mapStateToProps, null)(TrailerList)