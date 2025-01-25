import { FormEvent, useState } from "react";
import CreateTodoButton from "@/components/common/CreateTodoButton";
interface TodoFormProps {
  onAddTodo: (formData: FormData) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    setIsSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);
    await onAddTodo(formData);
    setIsSubmitting(false);
    setInputValue("");
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
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <CreateTodoButton
          type="submit"
          disabled={!inputValue.trim() || isSubmitting}
        />
      </div>
    </form>
  );
}
