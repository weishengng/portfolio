import Button from "./ui/Button";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>

            <p className="text-blue-400 text-lg font-medium">
              👋 Hello, I'm
            </p>

            <h1 className="text-7xl lg:text-8xl font-black mt-4 leading-none">
              Wei
            </h1>

            <h2 className="mt-6 text-3xl text-slate-300 font-semibold">
              Cloud & IT Professional
            </h2>

            <p className="mt-8 text-slate-400 text-xl leading-9 max-w-xl">
              Passionate about Cloud Computing, AWS, Linux,
              Python, SQL, Automation and Technical Support.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Button href="#projects">
                View Projects
              </Button>

              <Button href="/resume.pdf" variant="secondary">
                Download Resume
              </Button>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl">

              <div className="w-72 h-72 rounded-full bg-slate-900 flex items-center justify-center text-7xl">
                👨‍💻
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;