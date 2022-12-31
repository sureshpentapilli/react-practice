import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom";
import Home from './Home';

// import {useHistory} from 'react-router-dom'
// import Header from './Home'
 function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  // const history = useHistory();

  // useEffect(() => {
  //   if (localStorage.getItem('user-info'))
  //   history.push("/add")
  // })
  const navigate = useNavigate();

  async function Login()
{
    
    let item={email,password}
    console.warn(item)

 let result= await fetch("https://reactapisthree.onrender.com/users/userlogin",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }

    })
    result =await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    // history.push("/add")

}
  return (
    <div>
      {/* <Header /> */}
      <h1>Login</h1>
      <div className="col-sm-6 offset-sm-3">
      <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" />
      <br/>
      <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" />
      <br/>
      <button  onClick={() => {
          Login();
          navigate("/Home");
        }} className="btn-btn-primary">Login</button>




      </div>
    </div>
  )
}
export default Login;
