import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

function ProjectCard({ project, onLearnMore }) {
  return (
    <Card className="group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">

      {project.featured && (
  <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 mb-5">
    ⭐ Featured
  </span>
)}

      <div className="overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-300">
          {project.description}
        </p>

        <h4 className="mt-6 font-semibold text-white">
          Key Features
        </h4>

        <ul className="mt-3 space-y-2">
          {project.features.slice(0, 2).map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
              <span className="text-slate-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3 mt-8">

          {project.demo !== "#" && (
            <Button href={project.demo}>
              {project.demoText || "Live Demo"}
            </Button>
          )}

          {project.github !== "#" && (
            <Button
              href={project.github}
              variant="outline"
            >
              GitHub
            </Button>

            
          )}

          <button
            onClick={onLearnMore}
            className="text-blue-400 hover:text-blue-300 font-medium transition"
          >
            Learn More →
          </button>

        </div>

        

      </div>
    </Card>
  );
}

export default ProjectCard;