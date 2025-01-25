import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json(
        { message: "이미지 파일이 필요합니다." },
        { status: 400 }
      );
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;

    if (!apiUrl || !tenantId) {
      throw new Error("환경 변수가 설정되지 않았습니다.");
    }

    // 외부 API로 이미지 업로드
    const uploadFormData = new FormData();
    uploadFormData.append("image", image);

    const res = await fetch(`${apiUrl}/${tenantId}/images/upload`, {
      method: "POST",
      body: uploadFormData,
    });

    if (!res.ok) {
      throw new Error(`Failed to upload image: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { message: `${error} 에러가 발생했습니다.` },
      { status: 500 }
    );
  }
}
