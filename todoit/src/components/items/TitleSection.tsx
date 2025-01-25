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
      className={`mb-4 flex items-center justify-center rounded-full border-2 border-slate-900 px-3 py-[9px] ${isCompleted ? "bg-secondary" : ""}`}
    >
      <input
        type="checkbox"
        id={id}
        checked={isCompleted}
        onChange={onInputChange}
        className="appearance-none p-4 focus:rounded-full"
      />
      <label htmlFor={id} className="cursor-pointer">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 ${
            isCompleted ? "border-primary bg-primary" : "bg-yellow-50"
          } peer-focus-visible:ring-2 peer-focus-visible:ring-slate-900 peer-focus-visible:ring-offset-2`}
        >
          <Image
            src="/image/icon/check-white.svg"
            alt="체크 아이콘"
            width={20}
            height={20}
            className={`${isCompleted ? "block" : "hidden"}`}
          />
        </div>
      </label>
      <input
        type="text"
        value={name}
        onChange={onInputChange}
        className="flex-1 bg-transparent text-center text-xl font-bold focus:outline-none"
      />
    </div>
  );
}
