import { useState } from "react";
import { TodoItem } from "@/types/TodoTypes";

/**
 * Todo 상세 페이지 관리 커스텀 훅
 *
 * @param todo - 관리할 Todo 아이템 객체
 * @returns {object} Todo 상태값들과 변경 함수들
 *
 * 주요 기능:
 * - Todo 이름, 메모, 완료 상태, 이미지 URL을 상태로 관리
 * - 각 상태 state 설정
 * - 원본 데이터와 현재 상태를 비교하여 변경 여부를 확인하는 changed() 함수
 */
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
