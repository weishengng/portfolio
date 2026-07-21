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
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>

            <p className="text-blue-400 text-lg font-medium">
              👋 Hello, I'm
            </p>

            <h1 className="text-7xl lg:text-8xl font-black mt-4 leading-none">
              Wei Sheng
            </h1>

            <h2 className="mt-6 text-3xl text-slate-300 font-semibold">
              <span className="block">AWS Certified Cloud Practitioner</span>
              <span className="block mt-2">IT Graduate • Cloud & IT Support</span>
            </h2>

            <p className="mt-8 text-slate-400 text-xl leading-9 max-w-xl">
              IT graduate with hands-on experience in AWS, Linux, Python, SQL, and technical support. Passionate about building cloud solutions and solving real-world technical problems.
            </p>

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

              <Button href={`${import.meta.env.BASE_URL}resume.pdf`} variant="secondary">
                Download Resume
              </Button>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-75 h-75 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl">

            <img
              src={profile}
              alt="Wei Sheng Ng"
              className="w-72 h-72 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;