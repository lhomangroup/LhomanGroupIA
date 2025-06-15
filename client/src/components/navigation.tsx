import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const expertises = {
    "Développement sur-mesure": [
      "Applications mobiles",
      "Logiciels métier sur-mesure",
      "Sites e-commerce",
      "Applications SaaS"
    ],
    "Data & IA": [
      "IA Générative",
      "Computer Vision",
      "Systèmes prédictifs",
      "Data Engineering"
    ],
    "Stratégie produit": [
      "Product Discovery",
      "UX Research",
      "UX/UI Design"
    ],
    "Conseil & Transformation": [
      "Cloud & DevOps",
      "Transformation digitale"
    ],
    "Expertises techniques": [
      "React / React Native",
      "Node.js / TypeScript",
      "Angular",
      "Python",
      "PHP",
      "Flutter",
      ".NET",
      "Développement mobile natif"
    ]
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary">Lhoman Group IA</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-900 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Accueil
              </button>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium flex items-center gap-1">
                  Expertises
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 grid grid-cols-2 gap-4 p-4">
                  {Object.entries(expertises).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {category}
                      </DropdownMenuLabel>
                      {items.map((item) => (
                        <DropdownMenuItem key={item} className="cursor-pointer text-sm">
                          {item}
                        </DropdownMenuItem>
                      ))}
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
              >
                Accueil
              </button>
              
              {/* Mobile Expertises Menu */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-700 mb-2">Expertises</div>
                <div className="pl-4 space-y-3">
                  {Object.entries(expertises).map(([category, items]) => (
                    <div key={category} className="space-y-1">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {category}
                      </div>
                      {items.map((item) => (
                        <div key={item} className="text-sm text-gray-600 py-1">
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
