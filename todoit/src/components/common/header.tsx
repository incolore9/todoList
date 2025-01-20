import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="h-[60px] w-full border-b-[1px] bg-white">
      <div className="m-auto flex h-full max-w-[1200px] items-center">
        <Link href="/">
          <Image
            src="/image/common/Size=Large.svg"
            alt="do it logotype"
            width={150}
            height={100}
          />
        </Link>
      </div>
    </nav>
  );
}
