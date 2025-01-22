import TodoList from "@/components/common/TodoList";
import Image from "next/image";
import ShadowStyleBtn from "@/components/common/ShadowStyleBtn";

export default function Home() {
  return (
    <div className="m-auto h-screen max-w-[1200px] p-4">
      <div className="mb-10 flex gap-[26px] max-md:gap-4 max-sm:mb-6">
        <input
          type="text"
          placeholder="할 일을 입력해주세요"
          className="shadowDiv w-full flex-1"
        />
        <ShadowStyleBtn className={"bg-secondary max-sm:w-14"}>
          <div className="flex items-center gap-1">
            <Image
              src="/image/common/plus.svg"
              width={16}
              height={16}
              alt="추가하기 버튼"
            />
            <h2 className="max-sm:hidden">추가하기</h2>
          </div>
        </ShadowStyleBtn>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-1/2">
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
        <div className="w-full md:w-1/2">
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
