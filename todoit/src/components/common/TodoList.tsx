"use client";

import Image from "next/image";
import Link from "next/link";
import { TodoListProps } from "@/types/todo";

export default function TodoList({ todo, toggleTodo }: TodoListProps) {
  return (
    <div
      className={`mb-4 flex items-center gap-4 rounded-full border-2 border-slate-900 px-3 py-[9px] ${
        todo.isCompleted ? "bg-secondary" : ""
      }`}
    >
      {/* 체크박스 input - 실제로는 보이지 않지만 접근성을 위해 설정 */}
      <input
        type="checkbox"
        id={String(todo.id)}
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
        className="absolute appearance-none p-4 focus:rounded-full cursor-pointer"
      />
      {/* 커스텀 체크박스 디자인 라벨 */}
      <label htmlFor={String(todo.id)}>
        <div
          className={`cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 ${
            todo.isCompleted ? "border-primary bg-primary" : "bg-yellow-50"
          }`}
        >
          {/* 완료 상태일 때만 체크 아이콘 표시 */}
          <Image
            src="/image/icon/check-white.svg"
            alt="체크 아이콘"
            width={20}
            height={20}
            className={todo.isCompleted ? "block" : "hidden"}
          />
        </div>
      </label>
      {/* Todo 제목 - 완료 시 취소선 표시 및 상세 페이지로 이동 */}
      <p className={`text-slate-800 ${todo.isCompleted ? "line-through" : ""}`}>
        <Link href={`/items/${todo.id}`}>{todo.name}</Link>
      </p>
    </div>
  );
}
