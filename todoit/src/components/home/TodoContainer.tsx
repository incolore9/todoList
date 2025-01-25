"use client";

import { useState } from "react";
import { addTodo } from "@/app/utils/todoActions";
import TodoForm from "@/components/home/TodoForm";
import TodoSection from "@/components/home/TodoSection";
import { Todo } from "@/types/TodoTypes";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`;

export default function HomeClient({ initialTodos }: { initialTodos: Todo[] }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos || []);

  const handleAddTodo = async (formData: FormData) => {
    const createTodo = await addTodo(formData);
    setTodos(previousTodos => [...previousTodos, createTodo]);
  };

  const toggleTodo = async (id: string) => {
    const updatedTodos = todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);

    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isCompleted: !todos.find(todo => todo.id === id)?.isCompleted,
      }),
    });
  };

  return (
    <div className="m-auto h-screen max-w-[1200px] p-4">
      <div className="mb-10 flex w-full gap-[26px] max-md:gap-4 max-sm:mb-6">
        {/* Todo를 추가하는 폼 및 버튼 섹션입니다. */}
        <TodoForm onAddTodo={handleAddTodo} />
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Todo: 해야할 일 목록입니다. */}
        <TodoSection
          todos={todos}
          toggleTodo={toggleTodo}
          isCompleted={false}
        />
        {/* Done: 체크된 완료된 목록입니다. */}
        <TodoSection todos={todos} toggleTodo={toggleTodo} isCompleted={true} />
      </div>
    </div>
  );
}
