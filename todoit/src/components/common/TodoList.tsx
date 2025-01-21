"use client";

import { useState } from "react";
import Image from "next/image";

export default function TodoList() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`flex items-center gap-4 rounded-full border-2 border-slate-900 px-3 py-[9px] mb-4 ${isChecked ? "bg-secondary" : null}`}
    >
      <input
        type="checkbox"
        id="todoList"
        checked={isChecked}
        onChange={() => setIsChecked(checked => !checked)}
        className="absolute appearance-none p-4 focus:rounded-full"
      />
      <label htmlFor="todoList" className="cursor-pointer">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 ${
            isChecked ? "border-primary bg-primary" : "bg-yellow-50"
          } peer-focus-visible:ring-2 peer-focus-visible:ring-slate-900 peer-focus-visible:ring-offset-2`}
        >
          <Image
            src="/image/icon/check-white.svg"
            alt="체크 아이콘"
            width={20}
            height={20}
            className={`${isChecked ? "block" : "hidden"}`}
          />
        </div>
      </label>
      <p
        className={`text-base text-slate-800 ${isChecked ? "line-through" : ""}`}
      >
        텍스트 샘플
      </p>
    </div>
  );
}
