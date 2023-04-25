import React from "react";
import Task from "./Task";

function TaskList(props) {
  const {tasks} = props;

  if (!tasks || !Array.isArray(tasks)){
    return <div>NO Tasks To Display</div>
  }

  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.id} task={task} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
