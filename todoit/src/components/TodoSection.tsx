import TodoList from "@/components/common/TodoList";
import Image from "next/image";

export default function TodoSection({ todos, toggleTodo, isCompleted }) {
  const filteredTodos = todos.filter(
    (todo) => todo.isCompleted === isCompleted,
  );

  return (
    <div className="w-full md:w-1/2">
      <div
        className={`mb-4 flex h-9 w-[101px] items-center justify-center rounded-full ${isCompleted ? "bg-green-700" : "bg-lime-300"} px-4 py-2`}
      >
        <Image
          src={`/image/common/${isCompleted ? "DONE" : "TODO"}-logo.svg`}
          width={50}
          height={50}
          alt={isCompleted ? "DONE" : "TODO"}
        />
      </div>
      {filteredTodos.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={`/image/home/Type=${isCompleted ? "Done" : "Todo"}, Size=Large.svg`}
            width={200}
            height={200}
            alt={isCompleted ? "완료된 일이 없음" : "할 일이 없음"}
          />
          <p className="mt-4 text-center text-slate-400">
            {isCompleted
              ? "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!"
              : "할 일이 없어요.\nTODO를 새롭게 추가해주세요!"}
          </p>
        </div>
      ) : (
        filteredTodos.map((todo) => (
          <TodoList key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))
      )}
    </div>
  );
}
