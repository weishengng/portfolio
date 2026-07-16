import about from "../data/about";

function About() {
  return (
    <section
      id="about"
      className="py-32 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-12">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">

          <div>

            <h3 className="text-3xl font-bold">
              {about.name}
            </h3>

            <p className="text-blue-400 mt-2">
              {about.title}
            </p>

            <p className="mt-8 text-slate-300 leading-8">
              {about.description}
            </p>

          </div>

          <div className="space-y-6">

            <div className="bg-slate-800 rounded-2xl p-6">
              <h4 className="font-bold text-blue-400">
                Education
              </h4>

              <p>{about.education}</p>

              <p className="text-slate-400">
                {about.university}
              </p>

            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <h4 className="font-bold text-blue-400">
                Location
              </h4>

              <p>{about.location}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;