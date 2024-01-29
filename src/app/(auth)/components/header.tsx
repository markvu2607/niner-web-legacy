import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-secondary flex justify-center">
      <div className="w-full max-w-[1200px] px-2 py-4">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="Niner" height={50} width={100} />
        </Link>
      </div>
    </header>
  );
}
