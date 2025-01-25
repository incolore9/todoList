import { TodoSectionProps } from "@/types/todo";
import TodoList from "@/components/common/TodoList";
import Image from "next/image";

export default function TodoSection({
  todos,
  toggleTodo,
  isCompleted,
}: TodoSectionProps) {
  // 완료 여부에 따라 할 일 목록 필터링
  const filteredTodos = todos.filter(todo => todo.isCompleted === isCompleted);

  return (
    <div className="w-full md:w-1/2">
      {/* 섹션 헤더: TODO/DONE 표시 */}
      <div
        className={`mb-4 flex h-9 w-[101px] items-center justify-center rounded-full ${isCompleted ? "bg-green-700" : "bg-complete"} px-4 py-2`}
      >
        <Image
          src={`/image/common/${isCompleted ? "DONE" : "TODO"}-logo.svg`}
          width={50}
          height={50}
          alt={isCompleted ? "DONE" : "TODO"}
        />
      </div>

      {/* 목록이 없을 때 보여줄 빈 상태 UI */}
      {filteredTodos.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={`/image/home/Type=${isCompleted ? "Done" : "Todo"}-Large.svg`}
            width={isCompleted ? 220 : 200}
            height={isCompleted ? 220 : 200}
            className="max-sm:w-[120px] max-sm:h-[120px]"
            alt={isCompleted ? "완료된 일이 없음" : "할 일이 없음"}
          />
          {/* 상태별 하단 안내 메시지 */}
          <p className="mt-4 text-center text-slate-400 whitespace-pre-line">
            {isCompleted
              ? "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!"
              : "할 일이 없어요.\nTODO를 새롭게 추가해주세요!"}
          </p>
        </div>
      ) : (
        // 할 일 목록 렌더링
        filteredTodos.map(todo => (
          <TodoList key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))
      )}
    </div>
  );
}
