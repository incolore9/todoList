export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodoListProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

export interface TodoSectionProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  isCompleted: boolean;
}
