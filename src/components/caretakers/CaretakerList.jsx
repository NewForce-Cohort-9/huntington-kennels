import { useEffect, useState } from 'react'
import { getAllPuppyCaretakers } from '../../services/PuppyService'
import { CaretakerCard } from './Caretaker'

export const CaretakerList = () => {
  //useState is a hook so you can only call it at the top of your component 
  //useState allows you to utilize a setter function that will trigger a re-render when state is update to a different value
  const [caretakers, setCaretakers] = useState([])

  //oh 
  //const puppies = getAllPuppies()

  //useEffect fetches the data from the database and then sets state with the array
  useEffect(() => {
    getAllPuppyCaretakers().then(puppyCaretakerArray => {
      setCaretakers(puppyCaretakerArray)
    })
  }, [])

  return (
    <>

     <h3>Caretakers</h3>
     {caretakers.map(singleCaretaker => {
      return <CaretakerCard key={singleCaretaker.id} caretaker={singleCaretaker}/>
     })}
    </>
  )
}

