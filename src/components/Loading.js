import React from 'react';
import '../styles/loading.css'

const Loading = ()=>{
    return (
        <div className="loading">
            <div className="loading-main-container">
                <h2 id="loading">Loading</h2>
                <div className="loading-dots"></div>
                <div className="loading-dots"></div>
                <div className="loading-dots"></div>
            </div>
        </div>
    )
}

export default Loading;