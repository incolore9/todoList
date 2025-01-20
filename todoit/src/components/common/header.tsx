import Link from "next/link";

export default function Header() {
  return (
    <nav className="h-[60px] w-full border-b-[1px] bg-white">
      <div className="m-auto flex h-full max-w-[1200px] items-center">
        <Link href="/">
          <img src="/image/common/Size=Large.svg" alt="do it logotype " />
        </Link>
      </div>
    </nav>
  );
}
