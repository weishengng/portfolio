import { useEffect } from "react";

import Badge from "./ui/Badge";
import Button from "./ui/Button";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl"
      >
        {/* Header */}

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-700 bg-slate-900/95 px-8 py-5 backdrop-blur">
            <div>
                <h2 className="text-3xl font-bold text-white">
                    {project.title}
                </h2>

                <p className="mt-2 text-slate-400">
                    {project.tech.join(" • ")}
                </p>
            </div>

          <button
            onClick={onClose}
            className="text-3xl text-slate-400 transition hover:text-white"
          >
            ×
          </button>
        </div>

        {/* Image */}

        <div className="grid lg:grid-cols-2 gap-10 p-8">

            {/* Left Side */}

            <div>
                <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl border border-slate-700 shadow-xl object-cover"
                />
            </div>

            {/* Right Side */}

            <div className="space-y-10">

            <section>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-white">
                Description
                </h3>

                <p className="leading-8 text-slate-300">
                {project.description}
                </p>
            </section>

            <section>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-white">
                Key Features
                </h3>

                <ul className="space-y-3">
                {project.features.map((feature, index) => (
                    <li
                    key={index}
                    className="flex items-start gap-3"
                    >
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500"></span>

                    <span className="text-slate-300">
                        {feature}
                    </span>
                    </li>
                ))}
                </ul>
            </section>

            <section>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-white">
                Technologies Used
                </h3>

                <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                    <Badge key={tech}>
                    {tech}
                    </Badge>
                ))}
                </div>
            </section>

            {project.learned && (
                <section>
                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-white">
                    What I Learned
                </h3>

                <ul className="space-y-3">
                    {project.learned.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-3"
                    >
                        <span className="mt-2 h-2 w-2 rounded-full bg-green-500"></span>

                        <span className="text-slate-300">
                        {item}
                        </span>
                    </li>
                    ))}
                </ul>
                </section>
            )}

            <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-700">
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
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;