import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="favicon.svg" className="h-10" />
          <h1 className="text-xl font-bold text-primary">Biblioteca Marina</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#especies"
            className="text-sm font-medium hover:text-primary transition-colors">
            Especies
          </a>
          <a
            href="#conservacion"
            className="text-sm font-medium hover:text-primary transition-colors">
            Conservación
          </a>
          <a
            href="#contaminacion"
            className="text-sm font-medium hover:text-primary transition-colors">
            Impacto Ambiental
          </a>
        </nav>

        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Search className="h-4 w-4" />
          Buscar
        </Button>
      </div>
    </header>
  );
}
