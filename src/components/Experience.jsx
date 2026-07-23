import experience from "../data/experience";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import SectionTitle from "./ui/SectionTitle";

function Experience() {
  return (
    <section
      id="experience"
      className="py-32 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-8">

        <SectionTitle>
          Experience
        </SectionTitle>

        <div className="relative ml-10">

          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>

          <div className="space-y-12">

            {experience.map((job) => (

              <div key={job.id} className="relative pl-16">

                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 w-8 h-8 rounded-full bg-blue-600 border-4 border-slate-950"></div>

                <Card>

                  {job.featured && (
                    <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5">
                      Featured Experience
                    </span>
                  )}

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

                    <div>

                      <h3 className="text-2xl font-bold">
                        {job.position}
                      </h3>

                      <p className="text-blue-400 mt-1 text-lg">
                        {job.company}
                      </p>

                    </div>

                    <div className="text-slate-400 text-sm space-y-1">

                      <p>📍 {job.location}</p>

                      <p>📅 {job.period}</p>

                      <p>{job.employmentType}</p>

                    </div>

                  </div>

                  <ul className="mt-8 space-y-3 list-disc list-inside text-slate-300">

                    {job.description.map((item, index) => (

                      <li key={index}>
                        {item}
                      </li>

                    ))}

                  </ul>

                  <div className="flex flex-wrap gap-3 mt-8">

                    {job.technologies.map((tech) => (

                      <Badge key={tech}>
                        {tech}
                      </Badge>

                    ))}

                  </div>

                </Card>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;