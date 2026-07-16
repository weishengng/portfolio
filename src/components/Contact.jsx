import contact from "../data/contact";

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-32 text-white">
      <div className="max-w-4xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-slate-400 text-lg">
          I'm always interested in cloud, IT support,
          and software engineering opportunities.
        </p>

        <div className="mt-12 space-y-4">

          <p>
            📧 {contact.email}
          </p>

          <p>
            📍 {contact.location}
          </p>

          <p>
            <a
              href={contact.github}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>

          <p>
            <a
              href={contact.linkedin}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;