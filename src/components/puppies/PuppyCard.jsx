import { useState, useEffect } from "react"
import { getAllTreatments } from "../../services/PuppyService"
import "./puppies.css"



export const PuppyCard = ({puppy}) => {
    const [treatment, setTreatment] = useState({})

    useEffect(() => {
        getAllTreatments().then(treatmentArray => {
           let singleTreatment = treatmentArray.filter(singleTreatment => singleTreatment.animalId === puppy.id)
            setTreatment(singleTreatment[0])
        })
      }, [])


    return <>
    <div className="puppyCard">
    <p>Name: {puppy.name}</p>
    <p>Breed: {puppy.breed}</p>
    <p>Location: {puppy.location?.name}</p>

    <p>Treatment: {treatment ? treatment.description : "No treatments at this time"}</p>
    {/* if(treatment){
        return {treatment.description}
    } else {
        return "No treatments at this time"
    } */}
    </div>
    </>
}