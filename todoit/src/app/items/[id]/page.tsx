import ItemDetail from "@/components/items/ItemDetail";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`;

async function getTodo(id: string) {
  const res = await fetch(`${BASE_API_URL}/${id}`);
  return res.json();
}

export default async function Items({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);

  return <ItemDetail todo={todo} id={params.id} />;
}
