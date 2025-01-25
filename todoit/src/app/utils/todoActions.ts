"use server";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}`;

// 새로운 할 일을 추가하는 서버 액션
export async function addTodo(formData: FormData) {
  const todoInput = formData.get("todo")?.toString();
  if (!todoInput?.trim()) return;

  try {
    const response = await fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: todoInput }),
    });

    if (!response.ok) {
      throw new Error("등록에 실패했습니다.");
    }

    return await response.json();
  } catch (error) {
    console.error("할 일 등록 실패:", error);
  }
}
