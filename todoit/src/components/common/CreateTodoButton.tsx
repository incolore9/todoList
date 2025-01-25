import React from "react";
import Image from "next/image";

interface CreateTodoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
}

const CreateTodoButton: React.FC<CreateTodoButtonProps> = ({
  disabled,
  ...props
}) => {
  return (
    // Todo를 추가하기 위한 버튼 컴포넌트로, 활성화/비활성화 상태에 따라 스타일이 변경됩니다.ㅣ
    <button
      className={`shadowDiv ${disabled ? "bg-slate-200 text-slate-900" : "bg-primary text-white"}`}
      disabled={disabled}
      {...props}
    >
      <div className="flex items-center gap-1">
        <Image
          src={`/image/icon/${disabled ? "plus-slate.svg" : "plus-white.svg"}`}
          width={16}
          height={16}
          alt="추가하기 버튼"
        />
        <h2 className="max-sm:hidden">추가하기</h2>
      </div>
    </button>
  );
};

export default CreateTodoButton;
