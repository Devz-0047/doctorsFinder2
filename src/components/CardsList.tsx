import Card from "./Card";

function CardLists() {
  return (
    <div className="flex flex-wrap items-center justify-center mt-16 mb-20 gap-14">
      <Card
        image="/doctor1.png"
        name="Prerna Narang"
        expertise="Male-Female Infertility"
        experience={3}
        languages="English, Hindi, Marathi"
        fees={800}
      />
      <Card
        image="/doctor2.jpg"
        name="Prerna Narang"
        expertise="Male-Female Infertility"
        experience={3}
        languages="English, Hindi, Marathi"
        fees={800}
      />
      <Card
        image="/doctor3.webp"
        name="Prerna Narang"
        expertise="Male-Female Infertility"
        experience={3}
        languages="English, Hindi, Marathi"
        fees={800}
      />
    </div>
  );
}

export default CardLists;
