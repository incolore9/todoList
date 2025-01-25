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
