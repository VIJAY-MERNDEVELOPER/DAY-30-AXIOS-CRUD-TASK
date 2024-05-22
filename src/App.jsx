import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import { UseData } from "./contexts/Data";
import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

function App() {
  axios.defaults.baseURL =
    "https://66477da12bb946cf2f9debbb.mockapi.io/api/data";

  return (
    <>
      {" "}
      <Navbar />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <div className="container">
        <div className="row justify-content-center">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit/:id" element={<Form />} />
            <Route path="/add" element={<Form />} />
            <Route path="/user/:id" element={<Card />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
