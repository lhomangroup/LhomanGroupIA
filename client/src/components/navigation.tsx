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
    "Data & IA": [
      "IA Générative",
      "Computer Vision", 
      "Systèmes prédictifs",
      "Data Engineering"
    ],
    "Stratégie produit": [
      "Découverte de produits",
      "Recherche UX",
      "Conception UX/UI"
    ],
    "Conseil & Transformation": [
      "Cloud et DevOps",
      "Transformation numérique"
    ],
    "Expertises techniques": [
      "React / React Native",
      "Node.js / TypeScript", 
      "Angular",
      "Python",
      "PHP",
      "Flutter",
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
                <DropdownMenuTrigger className="text-gray-700 hover:text-primary transition-all duration-300 px-4 py-2 text-sm font-medium flex items-center gap-2 rounded-lg hover:bg-blue-50 group">
                  Expertises
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[900px] bg-white/95 backdrop-blur-md border-0 shadow-2xl rounded-2xl p-8 mt-2">
                  <div className="grid grid-cols-4 gap-8">
                    {Object.entries(expertises).map(([category, items], index) => (
                      <div key={category} className="group">
                        <div className="relative">
                          <div className={`absolute -left-2 top-0 w-1 h-6 rounded-full bg-gradient-to-b ${
                            index === 0 ? 'from-blue-500 to-blue-600' :
                            index === 1 ? 'from-green-500 to-green-600' :
                            index === 2 ? 'from-purple-500 to-purple-600' :
                            'from-orange-500 to-orange-600'
                          }`}></div>
                          <DropdownMenuLabel className="text-sm font-bold text-gray-800 mb-4 pl-4">
                            {category}
                          </DropdownMenuLabel>
                        </div>
                        <div className="space-y-2 pl-4">
                          {items.map((item) => (
                            <DropdownMenuItem 
                              key={item} 
                              className="cursor-pointer text-sm text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent py-3 px-3 rounded-lg transition-all duration-200 border-0 font-medium"
                            >
                              <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-current rounded-full opacity-50"></div>
                                {item}
                              </span>
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 italic">
                        Découvrez l'ensemble de nos expertises techniques et méthodologiques
                      </p>
                    </div>
                  </div>
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
