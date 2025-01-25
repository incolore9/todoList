import Image from "next/image";

interface TitleSectionProps {
  id: string;
  name: string;
  isCompleted: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TitleSection({
  id,
  name,
  isCompleted,
  onInputChange,
}: TitleSectionProps) {
  return (
    <div
      // 완료 상태에 따라 배경색 변경
      className={`mb-4 flex items-center justify-center rounded-full border-2 border-slate-900 px-3 py-[9px] ${isCompleted ? "bg-secondary" : ""}`}
    >
      {/* 체크박스 입력 필드 */}
      <input
        type="checkbox"
        id={id}
        checked={isCompleted}
        onChange={onInputChange}
        className="appearance-none p-4 focus:rounded-full"
      />

      {/* 커스텀 체크박스 디자인 */}
      <label htmlFor={id} className="cursor-pointer">
        <div
          // 완료 상태에 따라 체크박스 스타일 변경
          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 ${
            isCompleted ? "border-primary bg-primary" : "bg-yellow-50"
          } peer-focus-visible:ring-2 peer-focus-visible:ring-slate-900 peer-focus-visible:ring-offset-2`}
        >
          {/* 완료 상태일 때만 체크 아이콘 표시 */}
          <Image
            src="/image/icon/check-white.svg"
            alt="체크 아이콘"
            width={20}
            height={20}
            className={`${isCompleted ? "block" : "hidden"}`}
          />
        </div>
      </label>

      {/* 제목 입력 필드 */}
      <input
        type="text"
        value={name}
        onChange={onInputChange}
        className="flex-1 bg-transparent text-center text-xl font-bold underline focus:outline-none"
      />
    </div>
  );
}
