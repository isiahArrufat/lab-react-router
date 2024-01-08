import React from "react";
import "./Highlights.css";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Highlights = ({ employees, owners, pets }) => {

  const employeesCount = employees ? employees.length : 0;
  const ownersCount = owners ? owners.length : 0;
  const petsCount = pets ? pets.length : 0;
 
  return (
    <section className="highlights">
     
      <article>
        <p className="numerical">{employeesCount}</p>
        <p>Pawesome staff members!</p>
      </article>
      <article>
        <p className="numerical">{petsCount}</p>
        <p>Furry children supported!</p>
      </article>
      <article>
        <p className="numerical">{ownersCount}</p>
        <p>Absolutely purrfect clients!</p>
      </article>
    
    </section>
  );
};

export default Highlights;
