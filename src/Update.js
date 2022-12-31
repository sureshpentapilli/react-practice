import React, { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactnumber, setcontactNumber] = useState("");

  const getData = async () => {
    let result = await fetch(
      "https://reactapisthree.onrender.com/users/getUsersList",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    result = await result.json();
    // console.log("Getting from rest", result);
    setData(result.data);
    // console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  function deleteUser(userId) {
    fetch("https://reactapisthree.onrender.com/users/deleteuser", {
      method: "POST",
      body: JSON.stringify({
        userId,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getData();
      });
    });
  }
  function selectUser(userId) {
    // let item=users[userId-1];
    setData(data.userId);
  }
  function updateUser(userId) {
    let data = { firstname, lastname, email, contactnumber, userId };
    fetch("https://reactapisthree.onrender.com/users/updateuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getData();
      });
    });
  }
  return (
    <div className="App">
      <h1> Fetch data from an api in react </h1>
      <div className="table">
        <table>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>contactNumber</th>
            <th>operations</th>
          </tr>
          {data.map((data, index) => (
            <tr>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.contactNumber}</td>
              <td>
                <button onClick={() => deleteUser(data.userId)}>Delete</button>
              </td>
              <td>
                <button onClick={() => selectUser(data.userId)}>update</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <input
        type="text"
        value={firstname}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        value={lastname}
        onChange={(e) => {
          setlastName(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        value={contactnumber}
        onChange={(e) => {
          setcontactNumber(e.target.value);
        }}
      />{" "}
      <br />
      <button onClick={updateUser}>update user</button>
    </div>
  );
}

export default Home;
