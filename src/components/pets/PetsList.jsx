import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Link, useParams } from "react-router-dom";

export const PetsList = ({ pets,  }) => {
  const { id } = useParams();

  if (!pets) {
    // Handle the case when pets is undefined (loading state)
    return <p>Loading...</p>;
  }

  const foundPets = pets.filter((pet) => {
    if (id === pet.id && pet.kind === "cat") {
      return true;
    } else if (id === pet.id && pet.kind === "dog") {
      return true;
    }
    return false;
  });

  if (foundPets.length > 0) {
    const [cats, dogs] = foundPets.reduce(
      (acc, pet) => {
        const position = pet.kind === "cat" ? 0 : 1;
        acc[position].push(pet);
        return acc;
      },
      [[], []]
    );

    return (
      <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <section className="pets-list">
          {foundPets.length > 0 ? (
            foundPets.map((pet) => (
              <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
            ))
          ) : (
            <p>No pets found for the given category.</p>
          )}
        </section>
        <Link to={`/${pets.kind.toLowerCase()}/${pets.id}`}>Go to Pet Details</Link>
      </section>
    );
  } else {
    return <p>No pets found for the given category.</p>;
  }
};

export default PetsList;

