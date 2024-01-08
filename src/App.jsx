import React from "react";
import { useState } from "react";
import {Route, Routes, Navigate} from "react-router-dom"


/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";
import Highlights from "./components/home/Highlights.jsx";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
  <div className="App"> 
    <div className="wrapper">
      <Nav />
     <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element = {<StaffList employees={employees} />} />
        <Route
            path="/pets"
            element={<Navigate to="/pets/cats" />} 
          />
         <Route path="/pets/cats" element={<PetsList kind="cats" />} />
        <Route path="/pets/dogs" element={<PetsList kind="dogs" />} />
        
      </Routes>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
