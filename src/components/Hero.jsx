import Button from "./ui/Button";
import profile from "../assets/profile.jpg";
import Badge from "./ui/Badge";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  HiOutlineClipboardCopy,
  HiCheck,
} from "react-icons/hi";
import { useState } from "react";

const skills = [
  "☁ AWS",
  "🐧 Linux",
  "🐍 Python",
  "🗄 SQL",
  "⚛ React",
];
function Hero() {
  
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("weishengng88@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-28 lg:pt-0">
      <div className="max-w-7xl mx-auto w-full px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side */}

          <div className="text-center lg:text-left">

            <p className="text-blue-400 text-base font-semibold uppercase tracking-widest">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mt-4 leading-none">
              Wei Sheng
            </h1>

            <h2 className="mt-6 text-3xl text-slate-300 font-semibold">
              <span className="block">AWS Certified Cloud Practitioner</span>
              <span className="block mt-2">Cloud Support • IT Operations • System Administration</span>
            </h2>

            <p className="mt-8 text-slate-400 text-xl leading-9 max-w-2xl">
                Recent Information Technology graduate from Brigham Young University–Hawaii with hands-on experience in AWS, Linux, Python, SQL, and technical support. Passionate about cloud computing, IT operations, and building reliable technology solutions while continuously learning new skills.            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              {skills.map((skill) => (
                <Badge key={skill}>
                  {skill}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">

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

            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mt-8 text-slate-400">

              <a
                href="https://github.com/weishengng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/weisheng-ng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                {copied ? (
                  <>
                    <HiCheck size={18} />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <HiOutlineClipboardCopy size={18} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

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