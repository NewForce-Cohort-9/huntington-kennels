import { useEffect, useState } from 'react'
import './App.css'
import { getAllPuppies, getAllPuppyCaretakers } from './services/PuppyService'

export const App = () => {
  //useState is a hook so you can only call it at the top of your component 
  //useState allows you to utilize a setter function that will trigger a re-render when state is update to a different value
  const [puppies, setPuppies] = useState([])
  const [caretakers, setCaretakers] = useState([])

  //oh 
  //const puppies = getAllPuppies()


  //useEffect fetches the data from the database and then sets state with the array
  useEffect(() => {
    getAllPuppies().then(puppyArray => {
      setPuppies(puppyArray)
    })
  }, [])

  //useEffect fetches the data from the database and then sets state with the array
  useEffect(() => {
    getAllPuppyCaretakers().then(puppyCaretakerArray => {
      setCaretakers(puppyCaretakerArray)
    })
  }, [])

  return (
    <>
     <h2>Puppies</h2>
     {puppies.map(singlePuppy => {
      return <p key={singlePuppy.id}>{singlePuppy.name}</p>
     })}
     <h3>Caretakers</h3>
     {caretakers.map(singleCaretaker => {
      return <p key={singleCaretaker.id}>{singleCaretaker.user ? singleCaretaker.user?.name : "No one"} takes care of {singleCaretaker.animal?.name} </p>
     })}
    </>
  )
}

export default App
