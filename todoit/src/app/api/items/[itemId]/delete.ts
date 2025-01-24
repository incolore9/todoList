import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${id}`,
    { method: "DELETE" },
  );

  return NextResponse.json(
    { message: res.ok ? "삭제 성공" : "삭제 실패" },
    { status: res.ok ? 200 : 500 },
  );
}
