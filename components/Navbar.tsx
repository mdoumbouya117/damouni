import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="sticky border-b border-purple-700 top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
          <span className="font-bold lg:inline-block">Damouni</span>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="relative ml-auto flex-1 md:grow-0 opacity-50 h-8">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search damouni..."
              className="w-full h-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <nav className="flex items-center">
            <Link href="" className="relative cursor-pointer">
              <ShoppingBag />
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-purple-500 rounded-full">
                0
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
