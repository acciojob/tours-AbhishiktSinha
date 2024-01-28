import React, { useState } from 'react';
import '../styles/tourCardStyle.css'

const TourCard = ({ name, info, image, price, id, handleDelete }) => {

    const [expandedStatus, setExpandedStatus] = useState(false)
    
    if (expandedStatus === true) console.log(info);

    return (
        <div className="single-tour">
            <button className="delete-btn" 
                onClick={()=>{handleDelete(id)}}
            >DEL</button>
            <div className="primary-details">
                <div className="image-container">
                    <img src={image} alt={name} />
                </div>

                <div className="titular-details">
                    <h1 className="card-title">{name}</h1>
                    <h4 className="tour-price">Price: $ <span>{price}</span></h4>
                </div>

                <button className="show-more-button" onClick={()=>setExpandedStatus(status=>!status)}>Show {expandedStatus != true ? `more` : `less`}</button>
            </div>

            { expandedStatus==true && (

                    <div className="tour-info">
                        {info}
                        {/* <div className="show-less-contianer">
                            <button className="show-less-button"
                                onClick={()=>setExpandedStatus(false)}
                            >Show less</button>
                        </div> */}
                    </div>
                )
            }
        </div>
    )
}

export default TourCard;