export interface Todo {
  id: string;
  name: string;
  memo: string | null;
  imageUrl?: string;
  isCompleted: boolean;
}

export interface TodoListProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
}

export interface TodoSectionProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  isCompleted: boolean;
}

export interface ItemDetailProps {
  todo: Todo;
  id: string;
}

export interface EditButtonProps {
  id: string;
  name: string;
  memo: string;
  isCompleted: boolean;
  isEditing: boolean;
}
