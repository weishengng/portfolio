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

            <div className="mt-8 space-y-6">
              {about.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-300 text-lg leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>

          </div>

          <div className="space-y-6">

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <h4 className="font-bold text-blue-400 mb-3">
                🎓 Education
              </h4>

              <p className="text-lg font-semibold">
                {about.education}
              </p>

              <p className="text-slate-400 mt-1">
                {about.university}
              </p>

              <p className="text-sm text-slate-500 mt-2">
                {about.universityLocation}
              </p>

              <p className="text-sm text-slate-500 mt-3">
                {about.year}
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
              <h4 className="font-bold text-blue-400">
                📍Current Location
              </h4>

              <p className="text-lg font-semibold">
                {about.currentLocation}
              </p>

              <p className="text-sm text-slate-500 mt-3">
                {about.availability}
              </p>
              
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;