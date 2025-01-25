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
      { message: `${error} 에러가 발생했습니다.` },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const body = await request.json();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${params.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    if (!res.ok) {
      throw new Error("Failed to update item");
    }

    return NextResponse.json({ message: "수정되었습니다." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `${error} 에러가 발생했습니다.` },
      { status: 500 },
    );
  }
}
