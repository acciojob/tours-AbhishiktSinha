import React, {useState} from 'react';
import TourCard from './TourCard.js'
import EmptyDisplayPlaceHolder from './EmptyDisplayPlaceHolder.js'
import { getToursList } from '../data/tourData';


const ToursDisplaySection = ({toursItemsList, setToursItemsList, children})=> {
    
    function handleDelete(cardId) {
        setToursItemsList(toursItemsList.filter((item)=>{
            return (item.id != cardId)
        }))
    }

    return (
        <div className="card-display-section">
            {children}

            {toursItemsList.length > 0 && 
                (
                    toursItemsList.map((item) => {
                        return (
                            <TourCard
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                info={item.info}
                                id={item.id}
                                handleDelete={handleDelete}
                            ></TourCard>
                        )
                    })
                )
            }
            {
                toursItemsList.length == 0 && <EmptyDisplayPlaceHolder setToursItemsList={setToursItemsList} />
            }
            
        </div>
    )
    
}
export default ToursDisplaySection;