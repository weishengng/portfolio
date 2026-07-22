import certifications from "../data/certifications";
import CertificationCard from "./CertificationCard";

function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-slate-900">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-white mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;