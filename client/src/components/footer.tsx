import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Audit Data & IA",
    "Applications IA", 
    "Modèles d'IA"
  ];

  const companyLinks = [
    { label: "À propos", section: "about" },
    { label: "Portfolio", section: "portfolio" },
    { label: "Contact", section: "contact" },
    { label: "Blog", href: "#" },
    { label: "Carrières", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Lhoman Group IA</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Nous développons des solutions d'IA sur mesure en un temps record. 
              Nos Ingénieurs IA vous accompagnent de la conception au déploiement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-gray-300">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.section ? (
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Lhoman Group IA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
