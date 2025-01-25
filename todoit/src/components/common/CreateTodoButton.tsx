import React from "react";
import Image from "next/image";

interface CreateTodoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const CreateTodoButton: React.FC<CreateTodoButtonProps> = () => {
  return (
    <button className="shadowDiv bg-primary text-white">
      <div className="flex items-center gap-1">
        <Image
          src="/image/icon/plus-white.svg"
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
