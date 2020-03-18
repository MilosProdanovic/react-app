import React from "react";
import "./Card.scss";


const Card = ({ name, lastName, age, id}) => (
  <div className="card ">
    <h3>name: {name}</h3>
    <h3>last name: {lastName}</h3>
    <h3>age: {age}</h3>
  </div>
);

export { Card };
