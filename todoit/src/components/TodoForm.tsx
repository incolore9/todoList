import { FormEvent } from "react";
import CreateTodoButton from "@/components/common/CreateTodoButton";

interface TodoFormProps {
  onAddTodo: (formData: FormData) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    onAddTodo(formData);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex w-full gap-4">
        <input
          type="text"
          name="todo"
          placeholder="할 일을 입력해주세요"
          className="shadowDiv w-full flex-1"
        />
        <CreateTodoButton type="submit" />
      </div>
    </form>
  );
}
