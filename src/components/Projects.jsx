import { useState } from "react";
import ProjectCarousel from "./ProjectCarousel";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";
import { Navigation, Pagination } from "swiper/modules";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-white mb-16">
          Featured Projects
        </h2>

        <ProjectCarousel
          projects={projects}
          onProjectClick={setSelectedProject}
        />

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;