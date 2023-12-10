import { Container } from "@/components/containers/container";
import { SignInForm } from "../components/sign-in-form";
import { cn } from "@/utils";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function SignInPage() {
  return (
    <div>
      <div className="flex justify-center">
        <div
          className={cn(
            "w-full max-w-[1400px] h-[290px]",
            "flex justify-center",
            "bg-[url('/images/login-banner.jpg')]",
          )}
        >
          <div className="w-full max-w-[1200px] relative">
            <Container className="w-[320px] absolute right-20 -top-6">
              <SignInForm />
            </Container>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={cn("w-full max-w-[1200px] py-8", "grid grid-cols-3 gap-4")}
        >
          <div>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Deciding what to read next?
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-sm">
              You’re in the right place. Tell us what titles or genres you’ve
              enjoyed in the past, and we’ll give you surprisingly insightful
              recommendations.
            </p>
          </div>
          <div>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              What are your friends reading?
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-sm">
              Chances are your friends are discussing their favorite <br /> (and
              least favorite) books on Goodreads.
            </p>
          </div>
        </div>
      </div>
      <div className={cn("flex flex-col justify-center items-center", "py-12")}>
        <ExclamationTriangleIcon className="w-[40px] h-[40px]" />

        <h3 className="mt-4 text-lg font-semibold">Developing</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          We are currently working on this feature. Please try again soon.
        </p>
      </div>
    </div>
  );
}
