interface Props {
  bg: string;
  children: React.ReactNode;
}

export default function ShadowStyleBtn({ bg, children }: Props) {
  return (
    <button
      className={`shadowDiv flex w-[168px] justify-center rounded-md px-4 py-2 max-md:w-[162px] max-sm:w-14 ${bg}`}
    >
      {children}
    </button>
  );
}
