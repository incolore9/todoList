import TodoList from "@/components/common/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-auto h-screen max-w-[1200px] p-4">
      <div className="mb-[21px]">
        <input
          type="text"
          placeholder="할 일을 입력해주세요"
          className="shadowDiv w-full"
        />
      </div>

      <div className="flex gap-6">
        <div className="w-1/2">
          <div className="mb-4 flex h-9 w-[101px] items-center justify-center rounded-full bg-lime-300 px-4 py-2">
            <Image
              src="/image/common/TODO-logo.svg"
              width={50}
              height={50}
              alt="DONE"
            />
          </div>
          <TodoList />
          <TodoList />
        </div>
        <div className="w-1/2">
          <div className="mb-4 flex h-9 w-[101px] items-center justify-center rounded-full bg-green-700 px-4 py-2">
            <Image
              src="/image/common/DONE-logo.svg"
              width={50}
              height={50}
              alt="DONE"
            />
          </div>
          <TodoList />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
