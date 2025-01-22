interface Props {
  className: string;
  children: React.ReactNode;
}

export default function ShadowStyleBtn({ className, children }: Props) {
  return (
    <button
      className={`shadowDiv flex w-[168px] items-center justify-center gap-1 rounded-md px-4 py-2 font-bold max-md:w-[162px] ${className}`}
    >
      {children}
    </button>
  );
}
