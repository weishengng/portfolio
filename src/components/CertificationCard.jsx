import { Car } from "lucide-react";
import Card from "./ui/Card";

function CertificationCard({ certification }) {
  return (
    <Card>

      <h3 className="text-xl font-bold text-white">
        {certification.name}
      </h3>

      <p className="text-blue-400 mt-2">
        {certification.issuer}
      </p>

      <p className="text-slate-400 mt-4">
        {certification.year}
      </p>

    </Card>
  );
}

export default CertificationCard;