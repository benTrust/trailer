import React, { Component } from 'react'
import {connect} from 'react-redux'
import MenuBar from '../components/menuBar'

class Profil extends Component{

    render(){
        return (
            <div>
                <MenuBar current = "profil" />
                <div>test</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps, null)(Profil)