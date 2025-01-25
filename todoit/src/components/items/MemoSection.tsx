interface MemoSectionProps {
  memo: string;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function MemoSection({ memo, onInputChange }: MemoSectionProps) {
  return (
    <div className="flex w-3/5 flex-col gap-2 max-md:w-full">
      {/* 메모장 배경 이미지가 있는 컨테이너 */}
      <div className="relative min-h-[200px] w-full rounded-3xl bg-[url('/image/detail/memo.svg')] bg-cover bg-center bg-no-repeat p-4 max-sm:min-h-[180px] md:min-h-[300px]">
        {/* 메모 제목 */}
        <h3 className="absolute left-1/2 top-6 -translate-x-1/2 text-xl font-bold text-memoTitle max-sm:top-4 md:top-8 md:text-2xl">
          Memo
        </h3>
        {/* 메모 입력 부분 */}
        <textarea
          value={memo}
          onChange={onInputChange}
          className="mt-[60px] h-[120px] w-full resize-none bg-transparent text-center focus:outline-none max-sm:mt-[48px] md:mt-[72px] md:h-[200px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber-200 [&::-webkit-scrollbar]:w-1"
        />
      </div>
    </div>
  );
}
