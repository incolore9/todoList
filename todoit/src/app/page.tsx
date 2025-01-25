import HomeClient from "@/components/home/TodoContainer";

async function getTodos() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`;
  const res = await fetch(API_URL, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  return res.json();
}

export default async function Home() {
  console.log("API_URL:", process.env.NEXT_PUBLIC_API_URL);
  console.log("TENANT_ID:", process.env.NEXT_PUBLIC_TENANT_ID);

  const todos = await getTodos();
  // Todo 첫화면의 기능을 모아두었으며, API에서 가져온 데이터를 props로 전달합니다.
  return <HomeClient initialTodos={todos} />;
}
