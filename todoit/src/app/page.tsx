"use client"; // 임시
import { useState, useEffect } from "react";

import TodoList from "@/components/common/TodoList";
import Image from "next/image";
import ShadowStyleBtn from "@/components/common/ShadowStyleBtn";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`;

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = async (formData: string) => {
    const createTodo = { name: formData.get("todo"), isCompleted: false };
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createTodo),
    });

    if (res.ok) {
      const addedTodo = await res.json();
      setTodos((previousTodos) => [...previousTodos, addedTodo]);
    }
  };

  return (
    <div className="m-auto h-screen max-w-[1200px] p-4">
      <div className="mb-10 flex w-full gap-[26px] max-md:gap-4 max-sm:mb-6">
        <form onSubmit={addTodo} className="w-full">
          <div className="flex w-full gap-4">
            <input
              type="text"
              name="todo"
              placeholder="할 일을 입력해주세요"
              className="shadowDiv w-full flex-1"
            />
            <ShadowStyleBtn
              type="submit"
              className={"bg-secondary max-sm:w-14"}
            >
              <div className="flex items-center gap-1">
                <Image
                  src="/image/common/plus.svg"
                  width={16}
                  height={16}
                  alt="추가하기 버튼"
                />
                <h2 className="max-sm:hidden">추가하기</h2>
              </div>
            </ShadowStyleBtn>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="mb-4 flex h-9 w-[101px] items-center justify-center rounded-full bg-lime-300 px-4 py-2">
            <Image
              src="/image/common/TODO-logo.svg"
              width={50}
              height={50}
              alt="TODO"
            />
          </div>
          {todos.map((todo) => (
            <TodoList key={todo.id} />
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-4 flex h-9 w-[101px] items-center justify-center rounded-full bg-green-700 px-4 py-2">
            <Image
              src="/image/common/DONE-logo.svg"
              width={50}
              height={50}
              alt="DONE"
            />
          </div>
          {todos.map((todo) => (
            <TodoList key={todo.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
