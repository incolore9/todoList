"use client";

import { useState } from "react";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

interface Todo {
  name: string;
  memo: string | null;
  imageUrl?: string;
  isCompleted: boolean;
}

interface ItemDetailProps {
  todo: Todo;
  id: string;
}

export default function ItemDetail({ todo, id }: ItemDetailProps) {
  const [name, setName] = useState(todo.name || "");
  const [memo, setMemo] = useState(todo.memo || "");
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(
    todo.imageUrl || null,
  );

  const changed = () => {
    const originalMemo = todo.memo || "";
    const isNameChanged = name !== todo.name;
    const isMemoChanged = memo !== originalMemo;
    const isCompletedChanged = isCompleted !== todo.isCompleted;

    return isNameChanged || isMemoChanged || isCompletedChanged;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.type === "checkbox") {
      setIsCompleted(e.target.checked);
    } else if (e.target.type === "text") {
      setName(e.target.value);
    } else {
      setMemo(e.target.value);
    }
    setIsEditing(changed());
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="m-auto h-screen max-w-[1200px] bg-white px-4 py-4 max-md:p-6 max-sm:p-4 md:px-[102px] md:py-[27px]">
      <div
        className={`mb-4 flex items-center justify-center rounded-full border-2 border-slate-900 px-3 py-[9px] ${isCompleted ? "bg-secondary" : ""}`}
      >
        <input
          type="checkbox"
          id={id}
          checked={isCompleted}
          onChange={handleInputChange}
          className="appearance-none p-4 focus:rounded-full"
        />
        <label htmlFor={id} className="cursor-pointer">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 ${
              isCompleted ? "border-primary bg-primary" : "bg-yellow-50"
            } peer-focus-visible:ring-2 peer-focus-visible:ring-slate-900 peer-focus-visible:ring-offset-2`}
          >
            <Image
              src="/image/icon/check-white.svg"
              alt="체크 아이콘"
              width={20}
              height={20}
              className={`${isCompleted ? "block" : "hidden"}`}
            />
          </div>
        </label>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          className="flex-1 bg-transparent text-center text-xl font-bold focus:outline-none"
        />
      </div>

      <div className="mb-6 flex flex-col gap-4 max-sm:mb-4 md:flex-row">
        <div className="relative flex h-[311px] w-2/5 items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 max-md:w-full">
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="업로드된 이미지"
              fill
              className="rounded-3xl object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/image/detail/photo-icon.svg"
                width={64}
                height={64}
                alt="이미지 첨부"
              />
            </div>
          )}

          <label className="absolute bottom-4 right-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-slate-200">
            <input
              type="file"
              className="hidden"
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
            />
            <Image
              src="/image/icon/plus.svg"
              width={24}
              height={24}
              alt="더하기 모양 아이콘"
            />
          </label>
        </div>

        <div className="flex w-3/5 flex-col gap-2 max-md:w-full">
          <div className="relative min-h-[200px] w-full rounded-3xl bg-[url('/image/detail/memo.svg')] bg-cover bg-center bg-no-repeat p-4 max-sm:min-h-[180px] md:min-h-[300px]">
            <h3 className="absolute left-1/2 top-6 -translate-x-1/2 text-xl font-bold text-memoTitle max-sm:top-4 md:top-8 md:text-2xl">
              Memo
            </h3>
            <textarea
              value={memo}
              onChange={handleInputChange}
              className="mt-[60px] h-[120px] w-full resize-none bg-transparent text-center focus:outline-none max-sm:mt-[48px] md:mt-[72px] md:h-[200px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber-200 [&::-webkit-scrollbar]:w-1"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 max-sm:w-full md:gap-4">
        <EditButton
          id={id}
          name={name}
          memo={memo}
          isCompleted={isCompleted}
          isEditing={changed()}
        />
        <DeleteButton id={id} />
      </div>
    </div>
  );
}
