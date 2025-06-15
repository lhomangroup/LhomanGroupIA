import { Card, CardContent } from "@/components/ui/card";
import { Brain, Eye, MessageSquare, BarChart3, Bot, Shield } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Développement d'algorithmes d'apprentissage automatique pour l'analyse prédictive et la recommandation.",
    features: ["Analyse prédictive", "Systèmes de recommandation", "Classification automatique"],
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Solutions de vision par ordinateur pour l'analyse d'images et la reconnaissance automatique.",
    features: ["Reconnaissance d'objets", "Analyse d'images médicales", "Contrôle qualité automatisé"],
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: MessageSquare,
    title: "NLP & Chatbots",
    description: "Traitement du langage naturel et assistants conversationnels intelligents.",
    features: ["Chatbots intelligents", "Analyse de sentiment", "Traduction automatique"],
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Analyse avancée de données pour transformer vos informations en insights actionables.",
    features: ["Tableaux de bord intelligents", "Analyse comportementale", "Optimisation des processus"],
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: Bot,
    title: "Automatisation IA",
    description: "Automatisation intelligente des processus métier pour une efficacité maximale.",
    features: ["RPA intelligent", "Automatisation documentaire", "Workflows adaptatifs"],
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: Shield,
    title: "IA Éthique",
    description: "Développement d'IA responsable avec transparence, équité et respect de la vie privée.",
    features: ["Audit algorithme", "Conformité RGPD", "IA explicable"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
