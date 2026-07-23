import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { useState } from "react";


function CertificationCard({ certification }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card className="group hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">

      {certification.badge && (
        <img
          src={certification.badge}
          alt={certification.name}
          className="w-28 h-28 object-contain mx-auto mb-8"
        />
      )}

      <h3 className="text-xl font-bold text-white">
        {certification.name}
      </h3>

      <p className="text-blue-400 mt-2">
        {certification.issuer}
      </p>

      <p className="text-slate-400 mt-4">
        {certification.year}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 text-blue-400 hover:text-blue-300 font-medium"
      >
        {expanded ? "▲ Show Less" : "▼ Learn More"}
      </button>

      
      <div className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-700 pt-4">

          <p className="text-slate-300">
            {certification.description}
          </p>

          {certification.skills && (
            <>
              <h4 className="mt-5 mb-2 font-semibold text-white">
                Skills Demonstrated
              </h4>

              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </div>

          {certification.credential && (
          <Button
            href={certification.credential}
            variant="outline"
            className="mt-5"
          >
            View Credential
          </Button>
            
          )}
          

      </div>
      
    </Card>
  );
}

export default CertificationCard;