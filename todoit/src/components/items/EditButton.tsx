import Image from "next/image";

export default function EditButton() {
  return (
    <button className="shadowDiv flex w-[168px] items-center justify-center gap-1 rounded-md bg-slate-200 px-4 py-2 font-bold text-slate-900 max-md:w-[162px]">
      <Image
        src="/image/icon/check.svg"
        width={16}
        height={16}
        alt="수정 아이콘"
      />
      수정하기
    </button>
  );
}
