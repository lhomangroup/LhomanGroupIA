export default function AboutSection() {
  const stats = [
    { value: "50+", label: "Projets IA réalisés" },
    { value: "25+", label: "Clients satisfaits" },
    { value: "8", label: "Années d'expérience" },
    { value: "15+", label: "Experts dédiés" },
  ];

  const technologies = ["Python", "TensorFlow", "PyTorch", "AWS", "Azure"];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Une équipe d'experts au service de vos ambitions
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lhoman Group IA réunit des data scientists, ingénieurs IA et consultants métier passionnés par l'innovation. Notre approche combine excellence technique et compréhension business pour livrer des solutions qui transforment réellement votre activité.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Équipe d'experts en intelligence artificielle travaillant ensemble"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
