import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function CarouselTrack({ projects, onProjectClick }) {
  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onLearnMore={() => onProjectClick(project)}
        />
      ))}
    </motion.div>
  );
}

export default CarouselTrack;