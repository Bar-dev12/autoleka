import HeroImage from '../assets/Imgs.webp';
import TireImage from '../assets/Group.png';

export default function Hero() {
  return (
    <section className="py-2 md:py-2 bg-cover bg-center relative overflow-hidden">
      <div className="px-6">
        <div className="bg-[#5937E0] text-white rounded-[40px] shadow-lg relative overflow-hidden"
        style={{ backgroundImage: `url(${TireImage})` }}>

          {/* Background image of Tire tracks */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-100"
            
          ></div>

          {/* Car image */}
          <div
            className="hidden md:block absolute bottom-0 right-1/2 translate-x-1/2"
          >
            <img
              src={HeroImage}
              alt="Hero car"
              className="w-[300px] md:w-[400px] lg:w-[500px]"
            />
          </div>

          {/* Main content */}
          <div className="relative p-5 md:p-[50px] lg:p-[72px] flex flex-col md:flex-row justify-between items-center gap-10 z-10">
            {/* Left side */}
            <div className="">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Experience the road like never before
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper.
              </p>
              <a
                href="#"
                className="inline-block bg-[#FF9E0C] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#ce7f08] transition"
              >
                View all cars
              </a>
            </div>

            {/* Right side */}
            <div className="bg-white text-black rounded-[20px] p-6 shadow-lg w-full max-w-sm">
              <h2 className="font-bold text-center text-xl mb-4">Book your car</h2>
              <form className="flex flex-col gap-4">
                <select className="bg-gray-100 px-3 py-1 rounded-lg">
                  <option disabled selected>Car type</option>
                  <option>Berline</option>
                  <option>SUV</option>
                  <option>4x4</option>
                </select>
                <select className="bg-gray-100 px-3 py-1 rounded-lg">
                  <option disabled selected>Place of rental</option>
                  <option>Kinshasa</option>
                  <option>Lubumbashi</option>
                  <option>Kisangani</option>
                </select>
                <select className="bg-gray-100 px-3 py-1 rounded-lg">
                  <option disabled selected>Place of return</option>
                  <option>Kinshasa</option>
                  <option>Lubumbashi</option>
                  <option>Kisangani</option>
                </select>
                <input type="date" placeholder='Rental date' className="bg-gray-100 px-3 py-1 rounded-lg" />
                <input type="date" className="bg-gray-100 px-3 py-1" />
                <button className="bg-[#FF9E0C] text-white p-2 rounded-lg hover:bg-[#ce7f08] transition">
                  Book now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
