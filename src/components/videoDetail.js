import React from 'react'

const VideoDetail = ({title, description}) => {
    return (
        <div>
            <h1>{title || "Titre non disponible"}</h1>
            <p className = "descriptionVideo">{description || "Description non disponible"}</p>
        </div>
    )
}

export default VideoDetail