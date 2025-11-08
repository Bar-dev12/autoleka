import LogoImg from './LogoImg.jsx'
import iconCall from '../assets/Iconcall.svg'
// import logo from '/vite.svg'

export default function Header() {
  return (
    <header className="bg-white text-black py-4 ">
      <div className="container-fluid flex justify-between items-center px-6">
        <div>
          <a href="" className='flex row gap-5'>
              <LogoImg />
              <h1 className="text-2xl font-bold">Car Renta</h1>
          </a>
        </div>
        <nav className="space-x-6">
          <a href="#" className="hover:font-bold">Home</a>
          <a href="#" className="hover:font-bold">Vehicules</a>
          <a href="#" className="hover:font-bold">Details</a>
          <a href="#" className="hover:font-bold">About Us</a>
          <a href="#" className="hover:font-bold">Contact Us</a>
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
