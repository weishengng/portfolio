import Button from "./ui/Button";
import profile from "../assets/profile.jpg";
import Badge from "./ui/Badge";
const skills = [
  "☁ AWS",
  "🐧 Linux",
  "🐍 Python",
  "🗄 SQL",
  "⚛ React",
];
function Hero() {
  return (
    <section 
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>

            <p className="text-blue-400 text-base font-semibold uppercase tracking-widest">
              👋 Hello, I'm
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mt-4 leading-none">
              Wei Sheng
            </h1>

            <h2 className="mt-6 text-3xl text-slate-300 font-semibold">
              <span className="block">AWS Certified Cloud Practitioner</span>
              <span className="block mt-2">Cloud Support • IT Operations • System Administration</span>
            </h2>

            <p className="mt-8 text-slate-400 text-xl leading-9 max-w-2xl">
                Recent Information Technology graduate from Brigham Young University–Hawaii with hands-on experience in AWS, Linux, Python, SQL, and technical support. Passionate about cloud computing, IT operations, and building reliable technology solutions while continuously learning new skills.            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {skills.map((skill) => (
                <Badge key={skill}>
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <Button href="#projects">
                View Projects
              </Button>

              <Button
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                variant="secondary"
                download
              >
                Download Resume
              </Button>

              <div className="flex flex-wrap gap-6 mt-8 text-slate-400">

                <a
                  href="https://github.com/weishengng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/weisheng-ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:weishengng88@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  Email
                </a>

              </div>
            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="relative">

            <img
              src={profile}
              alt="Wei Sheng Ng"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.35)]"
            />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;