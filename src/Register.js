import React, { useState } from "react";
// import {useHistory} from 'react-router-dom'
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setlastName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [contactNumber, setcontactNumber] = useState("");

  // const history=useHistory();
  const navigate = useNavigate();

  async function signUp() {
    let item = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      contactNumber,
    };
    console.log(item);

    let result = await fetch(
      "https://reactapisthree.onrender.com/users/userRegistration",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    // history.push("/add")
  }

  if (password === confirmPassword) {
    console.log(Register);
  } else {
    console.log("passwords are not matching");
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Register</h1>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        className="form-control"
        placeholder="firstname"
      />
      <br />
      <input
        type="lastName"
        onChange={(e) => setlastName(e.target.value)}
        className="form-control"
        placeholder="lastName"
      />
      <br />
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="email"
      />
      <br />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
      />
      <br />
      <input
        type="confirmPassword"
        onChange={(e) => setconfirmPassword(e.target.value)}
        className="form-control"
        placeholder="confirmPassword"
      />
      <br />
      <input
        type="number"
        onChange={(e) => setcontactNumber(e.target.value)}
        className="form-control"
        placeholder="contactNumber"
      />
      <br />
      <button
        onClick={() => {
          signUp();
          navigate("/Login");
        }}
        className="btn btn-primary"
      >
        signUp
      </button>
    </div>
  );
}
export default Register;
