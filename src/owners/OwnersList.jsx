import { useEffect, useState } from 'react'
import { getAllOwners } from '../services/OwnerService'
import { OwnerCard } from './OwnerCard'

export const OwnersList = () => {
  //useState is a hook so you can only call it at the top of your component 
  //useState allows you to utilize a setter function that will trigger a re-render when state is update to a different value
  const [owners, setOwners] = useState([])

  //oh 
  //const puppies = getAllPuppies()


  //useEffect fetches the data from the database and then sets state with the array
  useEffect(() => {
    getAllOwners().then(pwmerArray => {
      setOwners(pwmerArray)
    })
  }, [])

  return (
    <>
     <h2>Owners</h2>
     {owners.map(singleOwner => {
      return <OwnerCard key={singleOwner.id} owner={singleOwner}/>
     })}
    </>
  )

}