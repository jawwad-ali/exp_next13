import React from "react";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodoById = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  return res.json();
}; 

const DynamicTodo = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodoById(todoId);
  return (
    <div style={{ padding: "10px" }}>
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed:{todo.completed ? "true" : "false"}</p>
      <p>By User: {todo.userId}</p>
    </div>
  );
};

export default DynamicTodo;
