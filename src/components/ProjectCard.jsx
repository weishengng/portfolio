import Card from "./ui/Card";
import Badge from "./ui/Badge";

function ProjectCard({ project }) {
  return (
    <Card>

      <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
          <span className="text-6xl">💻</span>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
        {project.tech.map((tech) => (
          <Badge key={tech}>
            {tech}
          </Badge>
        ))}
        </div>

        <div className="flex gap-6 mt-8">

          {project.github !== "#" && (
            <a
                href={project.github}
                target="https://github.com/weishengng/portfolio"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
            >
              GitHub →
            </a>
          )}

          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Live Demo →
            </a>
          )}
          
        </div>

      </div>
    </Card>
  );
}

export default ProjectCard;