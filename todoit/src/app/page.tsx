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
  return <HomeClient initialTodos={todos} />;
}
