import React from 'react'

const App = () => {
  let[username,setuserName]=React.useState("Mahesh")
  let[password,setPassword]=React.useState("1234")
 let handleUpdate = () => {
    setuserName("Maheshgowda")
    setPassword("Mahi1234")
  }
  return (
    <div>
      <h1>{username}</h1>
      <h1>{password}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default App
