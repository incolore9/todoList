import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(
  request: Request,
  props: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await props.params;

    if (!id) {
      return NextResponse.json(
        { message: "ID가 필요합니다." },
        { status: 400 }
      );
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

    if (!apiUrl || !tenantId) {
      throw new Error("환경 변수가 설정되지 않았습니다.");
    }

    const res = await fetch(`${apiUrl}/${tenantId}/items/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Failed to delete item: ${res.status}`);
    }

    return NextResponse.json({ message: "삭제되었습니다." }, { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { message: `${error} 에러가 발생했습니다.` },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  props: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await props.params;

    if (!id) {
      return NextResponse.json(
        { message: "ID가 필요합니다." },
        { status: 400 }
      );
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

    if (!apiUrl || !tenantId) {
      throw new Error("환경 변수가 설정되지 않았습니다.");
    }

    const body = await request.json();

    const res = await fetch(`${apiUrl}/${tenantId}/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Failed to update item: ${res.status}`);
    }

    return NextResponse.json({ message: "수정되었습니다." }, { status: 200 });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { message: `${error} 에러가 발생했습니다.` },
      { status: 500 }
    );
  }
}
