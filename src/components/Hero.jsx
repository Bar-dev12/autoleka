import HeroImage from '../assets/Imgs.webp';
import HeroImage2 from '../assets/Group.png';

export default function Hero() {
    return (
        <section className="py-5 bg-cover bg-center">
            <div className="px-6">
                <div
                className="bg-[#5937E0] text-white bg-cover bg-center mx-auto  py-6 rounded-[40px] shadow-lg"
                
                >
                    <div className='p-[72px]' style={{ backgroundImage: `url(${HeroImage2})` }}>
                        <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col md:flex-row justify-between items-center gap-10">

                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience the road like never before</h2>
                                <p className="text-lg md:text-xl mb-8">
                                    Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper
                                </p>
                                <a
                                    href="#"
                                    className="inline-block bg-[#FF9E0C] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#ce7f08] transition"
                                >
                                    Views all cars
                                </a>
                            </div>

                            <div className='bg-white text-black gap-6 flex flex-col rounded-[20px] p-6 shadow-lg'>
                                <h2 className='font-bold text-center text-xl'>Book your car</h2>
                                <form action="">
                                    <div className='flex flex-col gap-4'>
                                        <select className='border p-2 rounded-lg w-64'>
                                            <option value="" disabled selected>Car type</option>
                                            <option value="new-york">Berline</option>
                                            <option value="los-angeles">SUV</option>
                                            <option value="chicago">4x4</option>
                                        </select>
                                        <select className='border p-2 rounded-lg w-64'>
                                            <option value="" disabled selected>Place of rental</option>
                                            <option value="new-york">Kinshasa</option>
                                            <option value="los-angeles">Lubumbashi</option>
                                            <option value="chicago">Kisangani</option>
                                        </select>
                                        <select className='border p-2 rounded-lg w-64'>
                                            <option value="" disabled selected>Place of return</option>
                                            <option value="new-york">Kinshasa</option>
                                            <option value="los-angeles">Lubumbashi</option>
                                            <option value="chicago">Kisangani</option>
                                        </select>
                                        <input type="date" placeholder='Pick-up Date' className='border p-2 rounded-lg w-64'/>
                                        <input type="date" placeholder='Return Date' className='border p-2 rounded-lg w-64'/>
                                        <button className='bg-[#FF9E0C] text-white p-2 rounded-lg hover:bg-[#ce7f08] transition'>Book now</button>
                                    </div>
                                </form>
                            {/* Tu peux réafficher ton image ici si besoin */}
                            {/* <img src={HeroImage} alt="Hero" className="w-80 md:w-full" /> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
