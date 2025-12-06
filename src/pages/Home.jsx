import Hero from "../components/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCarSide, faWallet } from "@fortawesome/free-solid-svg-icons";
import bookingImg from "../assets/booking-section.png";
import { Link } from "react-router-dom";
import cars from "../data/cars.json";


export default function Home() {
  return (
    <>
      <Hero />

       {/* Section avantages */}
      <section className="px-4 py-12 md:px-8 lg:px-16 max-w-6xl mx-auto">

        <div className="grid gap-6 md:grid-cols-3">
          {/* Availability */}
          <FeatureCard
            icon={faLocationDot}
            title="Availability"
            text="Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis."
          />

          {/* Comfort */}
          <FeatureCard
            icon={faCarSide}
            title="Comfort"
            text="Gravida auctor fermentum morbi vulputate ac egestas orci etium convallis."
          />

          {/* Savings */}
          <FeatureCard
            icon={faWallet}
            title="Savings"
            text="Pretium convallis id diam sed commodo vestibulum lobortis volutpat."
          />
        </div>
      </section>

      {/* SECTION booking (image + étapes numérotées) */}
      <section className="px-4 py-12 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Image à gauche */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="rounded-3xl overflow-hidden shadow-sm bg-amber-50 w-100 h-full">
              <img
                src={bookingImg}
                alt="Happy customer driving"
                className="object-contain max-w-100 max-h-full"
              />
            </div>
          </div>

          {/* Étapes à droite */}
          <div className="w-full md:w-1/2">
            <ol className="space-y-4">
              <StepItem
                number={1}
                title="Erat at semper"
                text="Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum..."
              />
              <StepItem
                number={2}
                title="Urna nec vivamus risus duis arcu"
                text="Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper."
              />
              <StepItem
                number={3}
                title="Lobortis euismod imperdiet tempus"
                text="Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisi cras nunc luctus viverra nisi."
              />
              <StepItem
                number={4}
                title="Cras nulla aliquet nam eleifend amet et"
                text="Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida."
              />
            </ol>
          </div>
        </div>
      </section>

            {/* Section : Choose the car that suits you */}
      <section className="px-4 py-12 md:px-8 lg:px-16 max-w-6xl mx-auto">
        {/* Titre + View All */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Choose the car that{" "}
            <span className="block md:inline">suits you</span>
          </h2>

          <Link
            to="/cars"
            className="text-sm md:text-base font-medium text-slate-800 hover:text-[#5937E0] inline-flex items-center gap-1"
          >
            <span>View All</span>
            <span>→</span>
          </Link>
        </div>

        {/* Grille des voitures (6 premières) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.slice(0, 6).map((car) => (
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
                    <h3 className="text-lg font-semibold">{car.name}</h3>
                    <p className="text-sm text-slate-500">{car.group}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[#5937E0] font-bold text-lg">
                      ${car.pricePerDay}
                    </span>
                    <div className="text-xs text-slate-500">per day</div>
                  </div>
                </div>

                {/* Specs : Gearbox / Fuel / AC */}
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
        </div>
      </section>

    </>
  );
}

// Carte des avantages
function FeatureCard({ icon, title, text }) {
  return (
    <div className=" border-slate-300 rounded-xl px-6 py-8 text-center flex flex-col items-center gap-4">
      <div className="text-3xl mb-2 text-slate-800">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
}

// Etapes numérotées
function StepItem({ number, title, text }) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0">
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#5937E0] text-white text-sm font-semibold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-sm md:text-base font-semibold mb-1">{title}</h3>
        <p className="text-xs md:text-sm text-slate-600">{text}</p>
      </div>
    </li>
  );
}

