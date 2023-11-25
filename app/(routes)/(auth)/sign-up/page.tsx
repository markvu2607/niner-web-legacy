import { cn } from "@/_utils";
import { Metadata } from "next";
import { SignUpForm } from "../_components/sign-up-form";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Join Niner with our to improve your life.",
};

export default function SignUpPage() {
  return (
    <div className={cn("flex justify-center", "py-8")}>
      <div className="w-[400px]">
        <SignUpForm />
      </div>
    </div>
  );
}
