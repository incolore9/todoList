"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { EditButtonProps } from "../../types/EditButtonProps";

export default function EditButton({
  id,
  name,
  memo,
  isCompleted,
  isEditing,
}: EditButtonProps) {
  const router = useRouter();

  const handleEdit = async () => {
    const res = await fetch(`/api/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        memo,
        isCompleted,
      }),
    });

    //수정을 완료하면 홈으로 보냅니다
    if (res.ok) {
      alert("수정이 완료되었습니다.");
      router.push("/");
      router.refresh();
    } else {
      alert("수정에 실패했습니다.");
    }
  };

  return (
    <button
      onClick={handleEdit}
      disabled={!isEditing}
      className={`shadowDiv flex w-[168px] items-center justify-center gap-1 rounded-md px-4 py-2 font-bold max-md:w-[162px] ${
        isEditing ? "bg-complete" : "bg-slate-200 text-slate-900"
      }`}
    >
      <Image
        src="/image/icon/check.svg"
        width={16}
        height={16}
        alt="수정 아이콘"
      />
      수정 완료
    </button>
  );
}
