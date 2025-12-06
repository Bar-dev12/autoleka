import { useState } from "react";
import { Link } from "react-router-dom";
import cars from "../data/cars.json";

export default function Cars() {
  // Récupérer les groupes uniques depuis le JSON
  const uniqueGroups = Array.from(
    new Set(cars.map((car) => car.group))
  ).sort(); // optionnel : tri alphabétique

  const vehicleGroups = ["All vehicles", ...uniqueGroups];

  const [selectedGroup, setSelectedGroup] = useState("All vehicles");

  const filteredCars =
    selectedGroup === "All vehicles"
      ? cars
      : cars.filter((car) => car.group === selectedGroup);

  return (
    <main className="px-4 py-10 md:px-8 lg:px-12 max-w-6xl mx-auto">
      {/* Titre */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
        Select a vehicle group
      </h1>

      {/* Barre de filtres */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 bg-slate-100 rounded-full p-2 md:p-3">
        {vehicleGroups.map((group) => {
          const isActive = group === selectedGroup;

          return (
            <button
              key={group}
              type="button"
              onClick={() => setSelectedGroup(group)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300
                ${
                  isActive
                    ? "bg-[#5937E0] text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-200"
                }`}
            >
              <span className="text-lg">🚗</span>
              <span>{group}</span>
            </button>
          );
        })}
      </div>

      {/* Grille des voitures */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCars.map((car) => (
          <article
            key={car.id}
            className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="bg-slate-100 h-40 md:h-44 lg:h-48">
              <img
                src={car.mainImage}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenu */}
            <div className="p-4 md:p-5 flex flex-col gap-3">
              {/* Nom + prix + group */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{car.name}</h2>
                  <p className="text-sm text-slate-500">{car.group}</p>
                </div>
                <div className="text-right">
                  <span className="text-[#5937E0] font-bold text-lg">
                    ${car.pricePerDay}
                  </span>
                  <div className="text-xs text-slate-500">per day</div>
                </div>
              </div>

              {/* Specs : Gear box / Fuel / AC */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mt-1">
                <div className="flex items-center gap-1">
                  <span className="text-base">⚙️</span>
                  <span>{car.technicalSpecification.gearBox}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-base">⛽</span>
                  <span>{car.technicalSpecification.fuel}</span>
                </div>
                {car.technicalSpecification.airConditioner && (
                  <div className="flex items-center gap-1">
                    <span className="text-base">❄️</span>
                    <span>Air Conditioner</span>
                  </div>
                )}
              </div>

              {/* Bouton View Details */}
              <div className="mt-4">
                <Link
                  to={`/cars/${car.id}`}
                  className="block w-full text-center rounded-full bg-[#5937E0] text-white text-sm font-medium py-2.5 hover:bg-[#4630b5] transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
