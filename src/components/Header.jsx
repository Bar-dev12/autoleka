import { NavLink } from 'react-router-dom'
import LogoImg from './LogoImg.jsx'
import iconCall from '../assets/Iconcall.svg'

export default function Header() {
  const navLinkClass = ({ isActive }) =>
    // `transition-all duration-300 hover:text-[#5937E0] hover:font-bold ${ ${
    //   // isActive ? 'font-bold text-[#5937E0]' : ''
    //   isActive ? 'font-bold text-black' : ''
    // }`

    `transition-all duration-300 hover:text-black hover:font-bold ${
      isActive ? 'font-bold text-black' : ''
  }`

  return (
    <header className="bg-white text-black py-4 ">
      <div className="container-fluid flex justify-between items-center px-6">
        <div>
          <NavLink to="/" className="flex row gap-5">
            <LogoImg />
            <h1 className="text-2xl font-bold">Car Renta</h1>
          </NavLink>
        </div>

        <nav className="space-x-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/cars" className={navLinkClass}>
            Vehicles
          </NavLink>
          <NavLink to="/details" className={navLinkClass}>
            Details
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex row">
          <img src={iconCall} alt="Icon Call" />
          <span className="ml-2">
            Need help? <br />
            <strong>+996 247-1680</strong>
          </span>
        </div>
      </div>
    </header>
  );
}
