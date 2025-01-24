"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`/api/items/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("삭제 완료하였습니다.");
      router.push("/");
      router.refresh();
    } else {
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="shadowDiv flex w-[168px] items-center justify-center gap-1 rounded-md bg-delete px-4 py-2 font-bold text-white max-md:w-[162px]"
    >
      삭제하기
    </button>
  );
}
