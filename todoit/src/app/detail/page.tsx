import ShadowStyleBtn from "@/components/common/ShadowStyleBtn";
import Image from "next/image";

export default function DetailPage() {
  return (
    <div className="m-auto h-screen max-w-[1200px] bg-white px-4 py-4 max-md:p-6 max-sm:p-4 md:px-[102px] md:py-[27px]">
      <input
        type="text"
        defaultValue="샘플텍스트"
        className="text-bl mb-4 h-16 w-full flex-1 rounded-3xl border-2 border-slate-900 text-center text-xl font-bold underline max-md:mb-5"
      />

      <div className="mb-6 flex flex-col gap-4 max-sm:mb-4 md:flex-row">
        <div className="relative flex h-[311px] w-2/5 items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 max-md:w-full">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/image/detail/photo-icon.svg"
              width={64}
              height={64}
              alt="이미지 첨부하기"
            />
          </div>

          <button className="absolute bottom-4 right-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 shadow-md hover:bg-slate-300">
            <Image
              src="/image/icon/plus.svg"
              width={24}
              height={24}
              alt="더하기 모양 아이콘"
            />
          </button>

          <input
            type="file"
            className="absolute cursor-pointer opacity-0"
            accept="image/png, image/jpeg"
          />
        </div>

        <div className="flex w-3/5 flex-col gap-2 max-md:w-full">
          <div className="relative min-h-[200px] w-full rounded-3xl bg-[url('/image/detail/memo.svg')] bg-cover bg-center bg-no-repeat p-4 max-sm:min-h-[180px] md:min-h-[300px]">
            <h3 className="absolute left-1/2 top-6 -translate-x-1/2 text-xl font-bold text-memoTitle max-sm:top-4 md:top-8 md:text-2xl">
              Memo
            </h3>
            <textarea
              className="mt-[60px] h-[120px] w-full resize-none bg-transparent text-center focus:outline-none max-sm:mt-[48px] md:mt-[72px] md:h-[200px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber-200 [&::-webkit-scrollbar]:w-1"
              defaultValue="샘플텍스트"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 max-sm:w-full md:gap-4">
        <ShadowStyleBtn className="bg-slate-200 text-slate-900 max-sm:flex-grow">
          <Image
            src="/image/icon/check.svg"
            width={16}
            height={16}
            alt="수정 아이콘"
          />
          수정하기
        </ShadowStyleBtn>

        <ShadowStyleBtn className="bg-delete text-white max-sm:flex-grow">
          <Image
            src="/image/icon/x.svg"
            width={16}
            height={16}
            alt="삭제 아이콘"
          />
          삭제하기
        </ShadowStyleBtn>
      </div>
    </div>
  );
}
