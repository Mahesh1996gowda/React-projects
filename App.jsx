
import React from 'react'
import Json from './task2.json'
import Details from './Details.jsx'
const App = () => {
  
  return (
    <div>
    <Details data={Json}/>
    </div>
  )
}

export default App
