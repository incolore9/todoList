import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${params.id}`,
      { method: "DELETE" },
    );

    if (!res.ok) {
      throw new Error("Failed to delete item");
    }

    return NextResponse.json({ message: "삭제되었습니다." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "에러가 발생했습니다." },
      { status: 500 },
    );
  }
}
