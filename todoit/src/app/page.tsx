import TodoList from "@/components/common/TodoList";
import Image from "next/image";
import ShadowStyleBtn from "@/components/common/ShadowStyleBtn";

export default function Home() {
  return (
    <div className="m-auto h-screen max-w-[1200px] p-4">
      <div className="mb-[21px] flex gap-[26px]">
        <input
          type="text"
          placeholder="할 일을 입력해주세요"
          className="shadowDiv w-full flex-1"
        />
        <ShadowStyleBtn bg={"bg-secondary"}>
          <div className="flex items-center gap-1">
            <Image
              src="/image/common/plus.svg"
              width={16}
              height={16}
              alt="추가하기 버튼"
            />
            추가하기
          </div>
        </ShadowStyleBtn>
      </div>

      <div className="flex gap-6">
        <div className="w-1/2">
          <div className="mb-4 flex h-9 w-[101px] items-center justify-center rounded-full bg-lime-300 px-4 py-2">
            <Image
              src="/image/common/TODO-logo.svg"
              width={50}
              height={50}
              alt="TODO"
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
