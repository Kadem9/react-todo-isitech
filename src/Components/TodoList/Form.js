import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import "./Form.css";

export default function Form() {
  const [budget, setBudget] = useState(500);
  const [inputTask, setInputTask] = useState();
  const [inputBudget, setInputBudget] = useState();

  const [task, setTask] = useState([]);

  const deleteElement = (id) => {
    const newArray = task.filter((item) => {
      return item.id !== id;
    });
    const deletedTask = task.find((task) => task.id === id);
    setTask(newArray);
    setBudget(budget - deletedTask.budget);
  };
  const handleForm = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      { myTask: inputTask, budget: inputBudget, id: uuidv4() },
    ]);

    setInputTask("");
    setInputBudget("");
  };

  const onChangeTask = (e) => {
    setInputTask(e);
  };
  const onChangeBudget = (e) => {
    setInputBudget(e);
  };

  return (
    <div className="container-form">
      <h3 className="title-add-task">Ajouter une tâche</h3>
      <form onSubmit={(e) => handleForm(e)}>
        <label className="label-add-task" htmlFor="myTask">
          Votre tâche
        </label>
        <input
          onInput={(e) => onChangeTask(e.target.value)}
          value={inputTask}
          className="input-task"
          type="text"
          id="myTask"
          placeholder="Exemple : Dormir"
          required
        />
        <label className="label-add-task" htmlFor="price">
          Votre prix
        </label>
        <input
          onInput={(e) => onChangeBudget(e.target.value)}
          value={inputBudget}
          className="input-task"
          type="number"
          name="price"
          id="price"
          placeholder="Exemple : Prix"
          required
        />
        <button className="input-valid-task">Ajouter</button>
      </form>
      <h4 className="title-budget">Mon budget général est de {budget} €</h4>
      <h3 className="title-add-task">Mes tâches</h3>
      {task.map((task, index) => {
        return (
          <Task
            myTask={task.myTask}
            budget={task.budget}
            id={task.id}
            key={index}
            delFunction={deleteElement}
          />
        );
      })}
    </div>
  );
}
