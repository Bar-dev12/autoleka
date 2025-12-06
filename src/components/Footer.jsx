import LogoImg from "./LogoImg";
import cars from "../data/cars.json";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
  // Récupérer les groupes uniques depuis le JSON
  const vehicleGroups = Array.from(
    new Set(cars.map((car) => car.group))
  ).sort();

  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 md:px-8">
        <div className="grid gap-10 md:grid-cols-4 mb-10">
            <div className="flex items-center gap-2">
              <LogoImg />
              <span className="font-semibold text-lg">Car Rental</span>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <IconCircle icon={faMapMarkerAlt} />
                    <div>
                        <h3 className="font-semibold text-sm text-slate-900">Address</h3>
                        <p className="text-sm text-slate-600">
                        Oxford Ave. Cary, NC 27511
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <IconCircle icon={faEnvelope} />
                <div>
                    <h3 className="font-semibold text-sm text-slate-900">Email</h3>
                    <p className="text-sm text-slate-600">nwiger@yahoo.com</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <IconCircle icon={faPhone} />
                <div>
                    <h3 className="font-semibold text-sm text-slate-900">Phone</h3>
                    <p className="text-sm text-slate-600">+537 547-6401</p>
                </div>
            </div>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          
          {/* COLONNE 1 */}
          <div className="space-y-4">
            <p className="text-sm font-bold text-black max-w-xs">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem t...
            </p>

            <div className="flex items-center gap-3">
                <a href="#" aria-label="Facebook">
                    <SocialIcon icon={faFacebookF} />
                </a>
                <a href="#" aria-label="Instagram">
                    <SocialIcon icon={faInstagram} />
                </a>
                <a href="#" aria-label="Twitter / X">
                    <SocialIcon icon={faXTwitter} />
                </a>
                <a href="#" aria-label="YouTube">
                    <SocialIcon icon={faYoutube} />
                </a>
            </div>

          </div>

          {/* COLONNE 2 – Useful links + Vehicles */}
            <div>
                <h3 className="font-semibold text-sm text-slate-900 mb-2">
                    Useful links
                </h3>
                <ul className="space-y-1 text-sm text-slate-600">
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Gallery</li>
                    <li>Blog</li>
                    <li>F.A.Q</li>
                </ul>
            </div>
    
            {/* COLONNE 3 – Download App */}
            <div>
                <h3 className="font-semibold text-sm text-slate-900 mb-2">
                    Vehicles
                </h3>
                <ul className="space-y-1 text-sm text-slate-600">
                    {vehicleGroups.map((group) => (
                    <li key={group}>{group}</li>
                    ))}
                </ul>
            </div>

            {/* COLONNE 4 – Download App */}
            <div className="space-y-3">
                <h3 className="font-semibold text-sm text-slate-900">
                Download App
                </h3>
                <div className="space-y-3">
                    {/* App Store */}
                    <button className="flex items-center gap-3 rounded-xl border border-black px-3 py-2 hover:bg-black hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faApple} className="text-2xl" />

                        <div className="leading-tight text-xs text-left">
                            <div className="text-[10px]">Download on the</div>
                            <div className="font-semibold text-sm">App Store</div>
                        </div>
                    </button>

                    {/* Google Play */}
                    <button className="flex items-center gap-3 rounded-xl border border-black px-3 py-2 hover:bg-black hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faGooglePlay} className="text-xl" />

                        <div className="leading-tight text-xs text-left">
                            <div className="text-[10px]">GET IT ON</div>
                            <div className="font-semibold text-sm">Google Play</div>
                        </div>
                    </button>

                </div>
            </div>
        </div>

        <p className="mt-10 text-xs text-center text-slate-500">
          © Copyright Car Rental {new Date().getFullYear()}. Design by Figma.guru
        </p>
      </div>
    </footer>
  );
}

/* ICON CIRCLE */
function IconCircle({ icon }) {
  return (
    <div className="h-10 w-10 rounded-full bg-[#FF9E0C] flex items-center justify-center text-white text-lg">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

/* SOCIAL ICON */
function SocialIcon({ icon }) {
  return (
    <div className="h-9 w-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#5937E0] hover:text-white transition-colors">
      <FontAwesomeIcon icon={icon} size="sm" />
    </div>
  );
}

