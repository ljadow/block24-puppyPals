import './App.css'
import { useState } from 'react'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  
  console.log(featuredPup)
  // console.log(puppies)

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
          return <p className = "pup" onClick={() => { setFeatPupId(puppy.id) }}key={puppy.id}>{puppy.name}</p>
        })
      }
      
      {featPupId && (
          <div className="featpup">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
      )}
    </div>
  )
}

export default App
