import Card from "./ui/Card";

function ProjectCard({ project }) {
  return (
    <Card>

      <div className="h-48 bg-slate-700 flex items-center justify-center">
        <span className="text-slate-400">Project Screenshot</span>
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
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 mt-8">

          <a
            href={project.github}
            className="text-blue-400 hover:text-blue-300"
          >
            GitHub →
          </a>

          <a
            href={project.demo}
            className="text-blue-400 hover:text-blue-300"
          >
            Live Demo →
          </a>

        </div>

      </div>
    </Card>
  );
}

export default ProjectCard;