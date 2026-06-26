import cars from "../data/cars";
import VehicleCard from "./VehicleCard";

const Fleet = () => {
  return (
    <section id="fleet" className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        Available Vehicles
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {cars.map((car) => {
          return (
            <VehicleCard key={car.id} car={car} />
          );
        })}

      </div>

    </section>
  );
};

export default Fleet;
