import { useEffect, useState } from 'react'
import { getAllPuppies } from '../../services/PuppyService'
import { PuppyCard } from './PuppyCard'

export const PuppyList = () => {
  //useState is a hook so you can only call it at the top of your component 
  //useState allows you to utilize a setter function that will trigger a re-render when state is update to a different value
  const [puppies, setPuppies] = useState([])

  //oh 
  //const puppies = getAllPuppies()


  //useEffect fetches the data from the database and then sets state with the array
  useEffect(() => {
    getAllPuppies().then(puppyArray => {
      setPuppies(puppyArray)
    })
  }, [])

  return (
    <>
     <h2>Puppies</h2>
     {puppies.map(singlePuppy => {
      return <PuppyCard key={singlePuppy.id} puppy={singlePuppy}/>
     })}
    </>
  )

}