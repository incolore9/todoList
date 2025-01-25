"use client";

import { ItemDetailProps } from "@/types/TodoTypes";
import { useItemDetail } from "@/app/hooks/useItemDetail";
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
      {/* 초기에 입력했던 Todo 제목을 수정합니다. */}
      <TitleSection
        id={id}
        name={name}
        isCompleted={isCompleted}
        onInputChange={handleInputChange}
      />

      <div className="mb-6 flex flex-col gap-4 max-sm:mb-4 md:flex-row">
        {/* 이미지를 업로드하는 영역입니다. */}
        <ImageUpload
          id={id}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          name={name}
          memo={memo}
          isCompleted={isCompleted}
        />
        {/* 추가 메모를 입력하는 영역입니다. */}
        <MemoSection memo={memo} onInputChange={handleInputChange} />
      </div>

      <div className="flex justify-end gap-3 max-sm:w-full md:gap-4">
        {/* 수정 버튼이며, 기존 내용과 비교하여 변화가 있을 때 활성화됩니다. */}
        <EditButton
          id={id}
          name={name}
          memo={memo}
          isCompleted={isCompleted}
          isEditing={changed()}
        />
        {/* 삭제 버튼입니다. 별도의 alert 없이 즉시 삭제하도록 했습니다. */}
        <DeleteButton id={id} />
      </div>
    </div>
  );
}
