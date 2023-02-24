import React from 'react'

const Img = () => {
    let [img,setImg]=React.useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOEK3osmoZYCn8G4qLpn9EPaqRnQsXkcbcA&usqp=CAU")
let handleimg=()=>{
    setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSe5O5QCYSzblM-GqlTOjV59OyMkU7Yl0dtQ&usqp=CAU")
}
  return (
    <div>
      <img src={img} alt="" /> <br />
     <pre>          <button onClick={handleimg}>Update</button></pre>
    </div>
  )
}

export default Img
