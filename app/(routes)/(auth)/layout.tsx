import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
}
