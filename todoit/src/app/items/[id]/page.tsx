import ItemDetail from "@/components/items/ItemDetail";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`;

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
  return <ItemDetail todo={todo} id={resolvedParams.id} />;
}
