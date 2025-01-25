import { useState } from "react";
import { TodoItem } from "@/types/TodoTypes";

export function useItemDetail(todo: TodoItem) {
  const [name, setName] = useState(todo.name || "");
  const [memo, setMemo] = useState(todo.memo || "");
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [imagePreview, setImagePreview] = useState<string | null>(
    todo.imageUrl || null
  );

  const changed = () => {
    const originalMemo = todo.memo || "";
    const originalImageUrl = todo.imageUrl || null;
    const isNameChanged = name !== todo.name;
    const isMemoChanged = memo !== originalMemo;
    const isCompletedChanged = isCompleted !== todo.isCompleted;
    const isImageChanged = imagePreview !== originalImageUrl;

    return (
      isNameChanged || isMemoChanged || isCompletedChanged || isImageChanged
    );
  };

  return {
    name,
    setName,
    memo,
    setMemo,
    isCompleted,
    setIsCompleted,
    imagePreview,
    setImagePreview,
    changed,
  };
}
