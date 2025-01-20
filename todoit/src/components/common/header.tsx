import Link from "next/link";

export default function Header() {
  return (
    <nav className="h-[60px] bg-white border-b-[1px] w-full">
      <div className="max-w-[1200px] m-auto h-full flex items-center">
        <Link href="/">
          <img src="/image/common/Size=Large.svg" alt="do it logotype" />
        </Link>
      </div>
    </nav>
  );
}
