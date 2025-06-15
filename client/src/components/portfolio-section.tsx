import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "E-COMMERCE",
    title: "Système de Recommandation Intelligent",
    description: "+35% de ventes grâce à un moteur de recommandation personnalisé basé sur l'IA.",
    tags: ["Machine Learning", "Collaborative Filtering"],
    categoryColor: "text-blue-600",
  },
  {
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "SANTÉ",
    title: "Diagnostic Médical Assisté",
    description: "Détection précoce avec 94% de précision pour l'analyse d'imagerie médicale.",
    tags: ["Computer Vision", "Deep Learning"],
    categoryColor: "text-green-600",
  },
  {
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "SERVICE CLIENT",
    title: "Assistant Virtuel Multilingue",
    description: "-60% de temps de réponse avec un chatbot intelligent disponible 24/7.",
    tags: ["NLP", "Chatbot"],
    categoryColor: "text-purple-600",
  },
  {
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "LOGISTIQUE",
    title: "Optimisation Supply Chain",
    description: "-25% de coûts logistiques grâce à l'optimisation prédictive des stocks.",
    tags: ["Predictive Analytics", "Optimization"],
    categoryColor: "text-orange-600",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "FINANCE",
    title: "Détection de Fraude",
    description: "99.2% de précision pour la détection en temps réel des transactions frauduleuses.",
    tags: ["Anomaly Detection", "Real-time ML"],
    categoryColor: "text-red-600",
  },
  {
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "INDUSTRIE",
    title: "Contrôle Qualité Automatisé",
    description: "+40% d'efficacité du contrôle qualité avec vision artificielle avancée.",
    tags: ["Computer Vision", "Quality Control"],
    categoryColor: "text-indigo-600",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous avons transformé les défis de nos clients en succès grâce à l'Intelligence Artificielle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className={`text-sm font-medium mb-2 ${item.categoryColor}`}>
                  {item.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button
            size="lg"
            className="bg-primary text-white px-8 py-4 hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  );
}
