import ItemDetail from "@/components/items/ItemDetail";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`;

// Todo 데이터를 조회
async function getTodo(id: string) {
  const res = await fetch(`${BASE_API_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch todo");
  }
  return res.json();
}

export default async function Items({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const todo = await getTodo(resolvedParams.id);

  // 상세 페이지의 기능을 모아두었으며, API에서 가져온 데이터를 props로 전달합니다.
  return <ItemDetail todo={todo} id={resolvedParams.id} />;
}
