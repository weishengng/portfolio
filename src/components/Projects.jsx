import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-white mb-16">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;