import Image from "next/image";
import { ImageUploadProps } from "@/types/TodoTypes";

export default function ImageUpload({
  imagePreview,
  setImagePreview,
}: ImageUploadProps) {
  return (
    <div
      className={`relative flex h-[311px] w-2/5 items-center justify-center rounded-3xl ${
        imagePreview
          ? "border-none"
          : "border-2 border-dashed border-gray-300 bg-gray-50"
      } max-md:w-full`}
      style={
        imagePreview
          ? {
              backgroundImage: `url(${imagePreview})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* 이미지가 없을 때만 기본 아이콘 표시 */}
      {!imagePreview && (
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/image/detail/photo-icon.svg"
            width={64}
            height={64}
            alt="이미지 첨부"
          />
        </div>
      )}

      <label
        className={`absolute bottom-4 right-4 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full ${
          imagePreview
            ? "border-2 border-slate-900 bg-[#0F172A]/50"
            : "bg-slate-200"
        }`}
      >
        {/* 실제 파일 입력은 숨기고 커스텀 UI 사용 */}
        <input
          type="file"
          className="hidden"
          accept="image/png, image/jpeg"
          onChange={e => {
            const file = e.target.files?.[0];
            if (file) {
              // FileReader를 사용하여 선택된 이미지를 Base64 문자열로 변환
              const reader = new FileReader();
              reader.onloadend = () => {
                // 변환된 이미지 데이터를 상태로 저장
                setImagePreview(reader.result as string);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        {/* 이미지 존재 여부에 따라 다른 아이콘 표시 */}
        <Image
          src={imagePreview ? "/image/icon/edit.svg" : "/image/icon/plus.svg"}
          width={24}
          height={24}
          alt={imagePreview ? "이미지 수정" : "이미지 추가"}
        />
      </label>
    </div>
  );
}
