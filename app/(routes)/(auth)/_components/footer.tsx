import moment from "moment";
import { footerMenu, connections } from "@/_configs/footer-menu";
import Link from "next/link";
import { Button } from "@/_components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary flex justify-center">
      <div className="w-full max-w-[1200px] px-2 py-4 flex justify-between">
        <div className="flex gap-x-8">
          {footerMenu.map((item) => (
            <div key={item.title} className="space-y-2">
              <h4 className="font-semibold text-gray-500 text-lg">
                {item.title.toUpperCase()}
              </h4>
              <ul className="space-y-1">
                {item.items.map((it) => (
                  <li key={it.title} className="hover:underline text-xs">
                    <Link href={it.href}>{it.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-500 text-lg">CONNECT</h4>
            <ul className="flex gap-2">
              {connections.map(({ Icon, href }) => (
                <Button key={href} variant="outline" size="icon" asChild>
                  <Link href={href}>
                    <Icon />
                  </Link>
                </Button>
              ))}
            </ul>
          </div>
        </div>
        <div>© {moment().year()} Niner, Inc.</div>
      </div>
    </footer>
  );
}