import Image from "next/image";

export default function DeleteButton() {
  return (
    <>
      <button className="shadowDiv flex w-[168px] items-center justify-center gap-1 rounded-md bg-delete px-4 py-2 font-bold text-white max-md:w-[162px]">
        <Image
          src="/image/icon/x.svg"
          width={16}
          height={16}
          alt="삭제 아이콘"
        />
        삭제하기
      </button>
    </>
  );
}
