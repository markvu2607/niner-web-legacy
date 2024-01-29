import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
import { cn } from "@/utils";

export function Header() {
  return (
    <header
      className={cn(
        "fixed left-0 right-0",
        "flex justify-center items-center",
        "h-[98px]",
      )}
    >
      <div
        className={cn(
          "w-full max-w-[1200px]",
          "flex justify-between items-center",
        )}
      >
        <Link href="/">
          <Image src="/icons/logo.svg" alt="Niner" height={50} width={100} />
        </Link>

        {/* <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle({})}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}

        <Link href="/sign-in">
          <Button>Sign in</Button>
        </Link>
      </div>
    </header>
  );
}
