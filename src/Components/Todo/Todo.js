import React, { useState } from "react";
import "./Todo.css";

export default function Todo() {
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
    <div>
      <h1>Ma liste</h1>

      <div className="overlay">
        <div className="my-modal">
          <ul className="ul-list">
            {myList.map((item, index) => {
              return (
                <li className="li-list" key={index}>
                  {item.task}
                  <button className="btn-list">Date : {item.date}</button>
                </li>
              );
            })}
          </ul>
          <button className="btn-close-list">X</button>
        </div>
      </div>
    </div>
  );
}
