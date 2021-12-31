import React from "react";

const delay = (time) => {
  const start = Date.now();
  while (Date.now() - start < time) {
    continue;
  }
  return start;
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.status === nextProps.status) {
    return true;
  }
  return false;
};

const TodoItem = ({ title, id, status, handleDelete, handleToggle }) => {
  /** Expensive calculation */
  const time = delay(200);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem"
      }}
    >
      <h3>{title}</h3>
      <div>{time}</div>
      <h3>{`${status ? "DONE" : "PENDING"}`}</h3>
      <button onClick={() => handleToggle(id)}>TOGGLE</button>
    </div>
  );
};

export const MemoisedTodoItem = React.memo(TodoItem, areEqual);

export default TodoItem;
