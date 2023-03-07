import React from 'react'

import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let [username,setusername]=React.useState("")
    let[password,setpassword]=React.useState("")
    let navigate=useNavigate()
    let  handleSubmit = (e) => {
        let Localusername=localStorage.getItem("username")
        let LocalPassword=localStorage.getItem("password")
e.preventDefault();
if(Localusername==username&&LocalPassword==password){
navigate("/home")
}else{
    navigate("./login")
}
    }
  return (
    <div style={{width:"500px",marginLeft:"200px",marginTop:"100px"}}>
      <form>
      <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' onChange={(e)=>{
        setusername(e.target.value)
      }} />
      <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' onChange={(e)=>{
        setpassword(e.target.value)
      }} />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' block onClick={handleSubmit}>
        Login
      </MDBBtn>
    </form>
    </div>
  )
}

export default Login
