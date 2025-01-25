import HomeClient from "@/components/home/TodoContainer";

async function getTodos() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`;
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Todo items를 불러오는데 실패했습니다.");
  }
  return res.json();
}

export default async function Home() {
  const todos = await getTodos();

  return <HomeClient initialTodos={todos} />;
}
