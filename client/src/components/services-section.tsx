import { Card, CardContent } from "@/components/ui/card";
import { Brain, Eye, MessageSquare, BarChart3, Bot, Shield } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Audit Data & IA",
    description: "Nos ingénieurs IA analysent vos processus et identifient des opportunités et axes de développement concrets pour intégrer l'intelligence artificielle à vos processus, transformer vos données en leviers stratégiques.",
    features: ["Analyse des processus existants", "Identification des opportunités IA", "Plan de transformation data-driven"],
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Bot,
    title: "Applications IA",
    description: "Nous vous accompagnons dans la conception et le développement d'une solution sur mesure qui s'intègre à votre stack technique et répond à vos besoins opérationnels et vos objectifs stratégiques.",
    features: ["Solutions sur-mesure", "Intégration technique", "Développement rapide"],
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Brain,
    title: "Modèles d'IA",
    description: "Nos ingénieurs développent des modèles d'IA sur mesure en s'appuyant sur les dernières avancées en Machine et Deep Learning. Nous sélectionnons les modèles les plus performants puis les entraînons sur vos données via des techniques de fine-tuning avancées.",
    features: ["Machine Learning avancé", "Deep Learning personnalisé", "Fine-tuning sur vos données"],
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos Expertises</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous maîtrisons l'ensemble des technologies d'Intelligence Artificielle pour répondre à tous vos besoins métier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
