import Image from "next/image";

export function Header() {
  return (
    <header className="bg-secondary flex justify-center">
      <div className="w-full max-w-[1200px] px-2 py-4">
        <Image src="/icons/logo.svg" alt="Niner" height={50} width={100} />
      </div>
    </header>
  );
}
