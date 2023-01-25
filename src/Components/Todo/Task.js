import React from "react";

export default function Task(props) {
  return (
    <div>
      {props.props.map((item, index) => {
        return (
          <li className="li-list" key={index}>
            {item.task}
            <button className="btn-list">Date : {item.date}</button>
          </li>
        );
      })}
    </div>
  );
}
