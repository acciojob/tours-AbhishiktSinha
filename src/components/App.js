import React, {useState, useEffect} from "react";
import Loading from './Loading';
import ToursDisplaySection from "./ToursDisplaySection";
import { getToursList } from "../data/tourData";
import '../styles/toursDisplaySection.css'

const App = () => {

    const [contentLoaded, setContentLoaded] = useState(false);
    const [toursItemsList, setToursItemsList] = useState(getToursList);

    useEffect(()=>{
      setTimeout(()=>{
        setContentLoaded(true)
      },3000)
    },[]);


    return(
      <main id="main">

        {
          contentLoaded && (
            <ToursDisplaySection 
            toursItemsList={toursItemsList}
            setToursItemsList={setToursItemsList}
            >
            <h1 id="title">Popular Europe Tour Plans</h1>

            </ToursDisplaySection>
          )
        }
        {
          !contentLoaded && <Loading />
        }
        
      </main>
    )
}
export default App;
