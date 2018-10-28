import React from 'react'
import {Link} from 'react-router'

const MenuBar = function({current}){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link to = "/trailers">
                        <li className = {`nav-item${current == "trailers" ? ' active' : '' }`} >
                            <div className="nav-link">Trailer</div>
                        </li>
                    </Link>
                    <Link to = "/profil">
                        <li className = {`nav-item${current == "profil" ? ' active' : '' }`}>
                            <div className="nav-link">Profil</div>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar