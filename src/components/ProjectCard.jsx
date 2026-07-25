import Card from "./ui/Card";
import Button from "./ui/Button";

function ProjectCard({ project, onLearnMore }) {
  return (
    <Card className="group flex h-full flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">

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

      <div className="flex flex-1 flex-col p-6">

        <h3 className="min-h-[72px] text-2xl font-bold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-4 min-h-[112px] text-slate-300">
          {project.description}
        </p>

        <h4 className="mt-6 font-semibold text-white">
          Key Features
        </h4>

        <div className="relative mt-3 h-36 overflow-hidden">
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />

                <span className="text-slate-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-800 via-slate-800/70 to-transparent" />
        </div>
                
        

        <div className="mt-auto pt-8">
          <div className="min-h-[44px] flex flex-wrap items-center gap-3">

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
          </div>

          <button
            onClick={onLearnMore}
            className="mt-5 text-blue-400 hover:text-blue-300 font-medium transition"
          >
            Learn More →
          </button>

        </div>

        

      </div>
    </Card>
  );
}

export default ProjectCard;