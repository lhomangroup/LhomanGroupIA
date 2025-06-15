import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              L'Intelligence Artificielle au{" "}
              <span className="text-primary">Service de Votre Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Lhoman Group IA accompagne les entreprises dans leur transformation digitale grâce à des solutions d'IA innovantes et sur-mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-primary text-white px-8 py-4 hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Démarrer un projet
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                size="lg"
                className="border-primary text-primary px-8 py-4 hover:bg-primary hover:text-white transition-colors duration-200 font-semibold"
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Intelligence artificielle et technologie moderne"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
