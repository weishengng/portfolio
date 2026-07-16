import Card from "./ui/Card";

function ExperienceCard({ item }) {
  return (
    <Card>

      <p className="text-blue-400 font-semibold">
        {item.year}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {item.title}
      </h3>

      <p className="text-slate-400 mt-1">
        {item.company}
      </p>

      <p className="text-slate-300 mt-6 leading-8">
        {item.description}
      </p>

    </Card>
  );
}

export default ExperienceCard;