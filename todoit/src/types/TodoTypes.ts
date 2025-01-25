import { Dispatch, SetStateAction } from "react";

export interface Todo {
  id: string;
  name: string;
  memo: string | null;
  imageUrl?: string;
  isCompleted: boolean;
}

export interface ItemDetailProps {
  todo: Todo;
  id: string;
}

export interface TodoItem {
  name: string;
  memo?: string | null;
  isCompleted: boolean;
  imageUrl?: string | null;
}

export interface ImageUploadProps {
  id: string;
  imagePreview: string | null;
  setImagePreview: Dispatch<SetStateAction<string | null>>;
  name: string;
  memo: string;
  isCompleted: boolean;
}
