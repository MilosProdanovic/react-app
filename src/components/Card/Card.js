import React from "react";
import "./Card.scss";
import deleteUser from "../../img/delete.png";
import copy from "../../img/copy.png";


const Card = ({ name, lastName, age, id, removeUser, copyUser }) => (
  <div className="card ">
    <h3>name: {name}</h3>
    <h3>last name: {lastName}</h3>
    <span>age: {age}</span>
    <div>
    <img
        className="copy"
        src={copy}
        alt="copy"
        onClick={() => {
          copyUser(id);
        }}
        />
      <img
        src={deleteUser}
        className="deleteUser"
        alt="delete-user"
        onClick={() => {
          removeUser(id);
        }}
      
      
    />
    </div>
  </div>
);

export { Card };
