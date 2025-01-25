"use client";

import { ItemDetailProps } from "@/types/TodoTypes";
import { useItemDetail } from "./useItemDetail";
import TitleSection from "./TitleSection";
import ImageUpload from "./ImageUpload";
import MemoSection from "./MemoSection";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function ItemDetail({ todo, id }: ItemDetailProps) {
  const {
    name,
    setName,
    memo,
    setMemo,
    isCompleted,
    setIsCompleted,
    imagePreview,
    setImagePreview,
    changed,
  } = useItemDetail(todo);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    if (target.type === "checkbox") {
      setIsCompleted(target.checked);
    } else if (target.type === "text") {
      setName(target.value);
    } else {
      setMemo(target.value);
    }
  };

  return (
    <div className="m-auto h-screen max-w-[1200px] bg-white px-4 py-4 max-md:p-6 max-sm:p-4 md:px-[102px] md:py-[27px]">
      <TitleSection
        id={id}
        name={name}
        isCompleted={isCompleted}
        onInputChange={handleInputChange}
      />

      <div className="mb-6 flex flex-col gap-4 max-sm:mb-4 md:flex-row">
        <ImageUpload
          id={id}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          name={name}
          memo={memo}
          isCompleted={isCompleted}
        />
        <MemoSection memo={memo} onInputChange={handleInputChange} />
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
