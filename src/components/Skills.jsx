import skills from "../data/skills";
import SectionTitle from "./ui/SectionTitle";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-32"
    >
      <div className="max-w-7xl mx-auto px-8">

        <SectionTitle subtitle="What I Use">
          Skills
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill) => (

            <div
              key={skill.title}
              className="rounded-2xl bg-slate-800 border border-slate-700 p-8 hover:border-blue-500 transition"
            >

              <div className="text-5xl">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {skill.title}
              </h3>

              <ul className="mt-6 space-y-2 text-slate-300">

                {skill.items.map((item) => (
                  <li key={item}>
                    • {item}
                  </li>
                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;