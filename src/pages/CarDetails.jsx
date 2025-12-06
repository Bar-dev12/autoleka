import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import cars from "../data/cars.json";


export default function CarDetails() {
  const { id } = useParams();
  const carId = Number(id);

  const car = cars.find((c) => c.id === carId);

  // si pas de voiture trouvée
  if (!car) {
    return (
      <main className="px-4 py-10 md:px-8 lg:px-12 max-w-5xl mx-auto">
        <p className="text-center text-red-500 font-semibold">
          Car not found.
        </p>
        <div className="text-center mt-4">
          <Link
            to="/cars"
            className="inline-block px-4 py-2 rounded-full bg-[#5937E0] text-white text-sm font-medium hover:bg-[#4630b5] transition-colors duration-300"
          >
            Back to cars
          </Link>
        </div>
      </main>
    );
  }

  const { technicalSpecification: spec } = car;

  // image affichée (par défaut: mainImage)
  const [activeImage, setActiveImage] = useState(car.mainImage);

  const galleryImages = [car.mainImage, ...(car.gallery || [])];

  // autres voitures (hors voiture actuelle), limité à 6
  const otherCars = cars.filter((c) => c.id !== carId).slice(0, 6);

  return (
    <main className="px-4 py-10 md:px-8 lg:px-16 max-w-6xl mx-auto">
      {/* Bouton retour */}
      <div className="mb-6">
        <Link
          to="/cars"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#5937E0] transition-colors"
        >
          <span>←</span>
          <span>Back to vehicle list</span>
        </Link>
      </div>

      {/* Haut de page : image + specs */}
      <section className="grid gap-y-2 gap-x-10 md:grid-cols-2 text-sm text-slate-700">
        {/* Colonne gauche : nom, prix, grande image, miniatures */}
        <div>
          {/* Nom + prix */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {car.name}
            </h1>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#5937E0]">
                ${car.pricePerDay}
              </span>
              <span className="text-sm text-slate-500">/ day</span>
            </div>
          </div>

          {/* Grande image */}
          <div className="w-full h-56 md:h-72 lg:h-80 rounded-3xl overflow-hidden bg-slate-100 mb-5">
            <img
              src={activeImage}
              alt={car.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Miniatures */}
          {galleryImages.length > 1 && (
            <div className="flex gap-4">
              {galleryImages.map((img, index) => {
                const isActive = img === activeImage;
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`h-20 w-28 md:h-20 md:w-28 rounded-2xl overflow-hidden bg-slate-100 border-2 transition-all duration-200 ${
                      isActive
                        ? "border-[#5937E0]"
                        : "border-transparent hover:border-slate-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${car.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Colonne droite : Technical Specification + Bouton + Equipment */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Technical Specification
          </h2>

          <div className="grid gap-4 md:gap-5 md:grid-cols-3">
            <SpecCard label="Gear Box" value={spec.gearBox} />
            <SpecCard label="Fuel" value={spec.fuel} />
            <SpecCard label="Doors" value={spec.doors} />
            <SpecCard
              label="Air Conditioner"
              value={spec.airConditioner ? "Yes" : "No"}
            />
            <SpecCard label="Seats" value={spec.seats} />
            <SpecCard
              label="Distance"
              value={spec.distance ? `${spec.distance}` : undefined}
            />
          </div>

          {/* Bouton Rent a car */}
          <div className="flex justify-start my-10">
            <button className="px-10 py-1 rounded-lg bg-[#5937E0] text-white text-sm md:text-base font-medium hover:bg-[#4630b5] transition-colors duration-300">
              Rent a car
            </button>
          </div>

          {/* Car Equipment */}
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Car Equipment
            </h2>

            {car.equipment && car.equipment.length > 0 ? (
              <div className="grid gap-y-2 gap-x-10 md:grid-cols-2 text-sm text-slate-700">
                {car.equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#5937E0] text-white text-xs">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">No equipment listed.</p>
            )}
          </div>
        </div>
      </section>

      {/* OTHER CARS */}
      {otherCars.length > 0 && (
        <section className="mt-12">
          {/* Titre + View All */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold">Other cars</h2>
            <Link
              to="/cars"
              className="text-sm md:text-base font-medium text-slate-700 hover:text-[#5937E0] inline-flex items-center gap-1"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>

          {/* Grille des autres voitures */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherCars.map((other) => (
              <article
                key={other.id}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="bg-slate-100 h-40 md:h-44 lg:h-48">
                  <img
                    src={other.mainImage}
                    alt={other.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenu */}
                <div className="p-4 md:p-5 flex flex-col gap-3">
                  {/* Nom + prix + group */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{other.name}</h3>
                      <p className="text-sm text-slate-500">{other.group}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[#5937E0] font-bold text-lg">
                        ${other.pricePerDay}
                      </span>
                      <div className="text-xs text-slate-500">per day</div>
                    </div>
                  </div>

                  {/* Specs rapide */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mt-1">
                    <div className="flex items-center gap-1">
                      <span className="text-base">⚙️</span>
                      <span>{other.technicalSpecification.gearBox}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-base">⛽</span>
                      <span>{other.technicalSpecification.fuel}</span>
                    </div>
                    {other.technicalSpecification.airConditioner && (
                      <div className="flex items-center gap-1">
                        <span className="text-base">❄️</span>
                        <span>Air Conditioner</span>
                      </div>
                    )}
                  </div>

                  {/* Bouton View Details */}
                  <div className="mt-4">
                    <Link
                      to={`/cars/${other.id}`}
                      className="block w-full text-center rounded-full bg-[#5937E0] text-white text-sm font-medium py-2.5 hover:bg-[#4630b5] transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

/** Card de spécification (boîte grise) */
function SpecCard({ label, value }) {
  if (!value && value !== 0) return null;

  return (
    <div className="bg-slate-50 rounded-2xl px-4 py-3 md:px-5 md:py-4 flex flex-col justify-center">
      <span className="text-xs uppercase tracking-wide text-slate-500 mb-1">
        {label}
      </span>
      <span className="text-sm md:text-base font-semibold text-slate-800">
        {value}
      </span>
    </div>
  );
}
