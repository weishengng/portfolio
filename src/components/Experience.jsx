import experience from "../data/experience";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="py-32 bg-slate-950">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-white mb-16">
          Experience
        </h2>

        <div className="space-y-8">

          {experience.map((item) => (
            <ExperienceCard
              key={item.title}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;