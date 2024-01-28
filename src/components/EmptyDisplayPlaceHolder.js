import React, {useState, useEffect} from 'react';
import { getToursList } from '../data/tourData';
import '../styles/Placeholder.css'

const EmptyDisplayPlaceHolder = ({setToursItemsList})=>{

    function resetResults() {
        setToursItemsList(getToursList());
    }

    return (
        <div className="reset-results-container">
            <h1>No Tours Left</h1>
            <button className="btn" id="resetButton"
                onClick={resetResults}
            >RESET</button>
        </div>
    )
}
export default EmptyDisplayPlaceHolder;