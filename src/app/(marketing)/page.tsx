import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p className="leading-7 [&:not(:first-child)]:mt-6">Marketing page</p>
      <Link href="/sign-in">
        <Button>Sign in</Button>
      </Link>
    </div>
  );
}
