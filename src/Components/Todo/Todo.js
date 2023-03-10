import React, { useState } from "react";
import "./Todo.css";
import Task from "./Task";

export default function Todo() {
  const [toggle, setToggle] = useState(false);

  const funcToggle = () => {
    setToggle(!toggle);
  };

  const myList = [
    {
      task: "Faire les courses",
      done: false,
      date: "2023-01-01",
    },
    {
      task: "Apprendre à jouer de la guitare",
      done: false,
      date: "2023-04-01",
    },
    {
      task: "Faire du sport",
      done: false,
      date: "2023-01-01",
    },
  ];
  return (
    <div className="list-container">
      <h1 className="title-list">Ma liste</h1>
      <button className="open-list" onClick={funcToggle}>
        Voir ma liste
      </button>
      {toggle && (
        <div className="overlay">
          <div className="my-modal">
            <ul className="ul-list">
              <Task props={myList} />
            </ul>
            <button onClick={funcToggle} className="btn-close-list">
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
