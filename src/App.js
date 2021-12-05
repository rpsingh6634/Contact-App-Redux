import React from "react";
import { render } from "react-router-dom";
import { 
  BrowserRouter,
  Routes,
  } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes exact path="/" component={() => <Home />} />
      <Routes exact path="/add" component={() => <AddContact />} />
      <Routes exact path="/edit/:id" component={() => <EditContact />} />
    </div>
  );
};
export default App;
