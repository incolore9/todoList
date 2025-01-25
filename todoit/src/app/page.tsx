"use client"; // 임시
import { useState, useEffect } from "react";

import TodoList from "@/components/common/TodoList";
import Image from "next/image";
import ShadowStyleBtn from "@/components/common/ShadowStyleBtn";
import { addTodo } from "@/app/utils/todoActions";
import TodoForm from "@/components/TodoForm";
import TodoSection from "@/components/TodoSection";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`;

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleAddTodo = async (formData) => {
    const createTodo = await addTodo(formData);
    setTodos((previousTodos) => [...previousTodos, createTodo]);
  };

  const toggleTodo = async (id) => {
    const updatedTodos = todos.map((check) =>
      check.id === id ? { ...check, isCompleted: !check.isCompleted } : check,
    );
    setTodos(updatedTodos);

    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isCompleted: !todos.find((todo) => todo.id === id).isCompleted,
      }),
    });
  };

  return (
    <div className="m-auto h-screen max-w-[1200px] p-4">
      <div className="mb-10 flex w-full gap-[26px] max-md:gap-4 max-sm:mb-6">
        <TodoForm onAddTodo={handleAddTodo} />
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <TodoSection
          todos={todos}
          toggleTodo={toggleTodo}
          isCompleted={false}
        />
        <TodoSection todos={todos} toggleTodo={toggleTodo} isCompleted={true} />
      </div>
    </div>
  );
}
