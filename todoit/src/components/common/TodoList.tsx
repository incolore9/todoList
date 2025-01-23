"use client";

import Image from "next/image";

export default function TodoList({ todo, toggleTodo }) {
  return (
    <div
      className={`mb-4 flex items-center gap-4 rounded-full border-2 border-slate-900 px-3 py-[9px] ${todo.isCompleted ? "bg-secondary" : ""}`}
    >
      <input
        type="checkbox"
        id={`${todo.id}`}
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
        className="absolute appearance-none p-4 focus:rounded-full"
      />
      <label htmlFor={`${todo.id}`} className="cursor-pointer">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 ${
            todo.isCompleted ? "border-primary bg-primary" : "bg-yellow-50"
          } peer-focus-visible:ring-2 peer-focus-visible:ring-slate-900 peer-focus-visible:ring-offset-2`}
        >
          <Image
            src="/image/icon/check-white.svg"
            alt="체크 아이콘"
            width={20}
            height={20}
            className={`${todo.isCompleted ? "block" : "hidden"}`}
          />
        </div>
      </label>
      <p className={`text-slate-800 ${todo.isCompleted ? "line-through" : ""}`}>
        {todo.name}
      </p>
    </div>
  );
}
