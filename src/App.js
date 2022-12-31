import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
// import UsersData from "./Update";
import Update from "./Update";
function App() {
  return (
    <>
      {/* <Register/> */}
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
