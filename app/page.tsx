import "./globals.css";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Home() {

  return (
    <main className="min-h-screen ">
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/van.jpg')",
        }}
      >
        <div className="w-full min-h-[400px] flex items-center">
          <div className="bg-white text-black p-6 sm:p-10 w-full max-w-2xl ml-5 text-left shadow-lg animate-slide-in">
            <h2 className="text-3xl sm:text-5xl font-serif leading-tight mb-4">
              <span className="bold">LeakFinder.com</span> <br />
              Locally Owned and<br />
              Serving Michigan Homes <span className="italic">Since</span> 1979<br />
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              LeakFinder.com is Southeast Michigan's Trusted Expert in Plumbing, Heating, Cooling, Electrical &amp; Water Cleanup Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:2484671761"
                className="bg-[#00033d] text-white px-6 py-3 rounded shadow text-lg inline-flex items-center justify-center gap-2"
              >
                <FaPhoneAlt className="text-white" /> (248) 467-1761
              </a>
              <a
                href="/contact"
                className="bg-[#f6be00] text-black px-6 py-3 rounded shadow text-lg inline-flex items-center justify-center gap-2"
              >
                <FaEnvelope className="text-black" /> Contact Us
              </a>
              <a
                href="/book"
                className="bg-blue-600 text-white px-6 py-3 rounded shadow text-lg inline-flex items-center justify-center"
              >
                BOOK ONLINE
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 sm:px-20">
        <div className="text-center mb-12">
          <div className="w-32 h-0.5 bg-[#f6be00] mx-auto mb-4"></div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#00033d] mb-2">Our Services</h2>
          <p className="text-lg text-[#00033d]">From plumbing to electrical, you can rely on LeakFinder.com to get the job done right.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 sm:px-20">
          {[
            {
              title: "Plumbing",
              image: "/plumbing.jpg",
              desc: "We offer a wide range of plumbing services, from installation to repair. Our experienced plumbers can handle any job, big or small.",
            },
            {
              title: "Water Clean Up",
              image: "/water.jpg",
              desc: "We've got you covered with our water clean up service. Whether it’s a leaky faucet or a flood, we’ll come in and handle any mess with ease.",
            },
            {
              title: "Gas",
              image: "/gas.jpg",
              desc: "Our experienced technicians are equipped with the latest tools and technology to get the job done quickly and efficiently.",
            },
            {
              title: "Cooling & Heating",
              image: "/heatingcooling.jpg",
              desc: "If you’re having trouble with your air conditioner, LeakFinder.com can diagnose the issue and get your house nice and cool in no time.",
            },
            {
              title: "Radon Mitigation",
              image: "/radon.jpg",
              desc: "Our experts will install a system that sucks the radon out of your home, keeping you and your family safe from potential health risks.",
            },
            {
              title: "Electrical Services",
              image: "/electrical.jpg",
              desc: "From wiring and lighting to repairs and installations, our experienced team is ready to help you with all your electrical needs.",
            },
          ].map((service, i) => (
            <div key={i} className="bg-white rounded shadow overflow-hidden transform transition-transform duration-200 hover:scale-105">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#00033d] mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{service.desc}</p>
                <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-[#fff8e1] text-[#00033d] py-16 px-6 sm:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:gap-12 max-w-7xl mx-auto">
          <div className="lg:w-1/2">
            <div className="max-w-4xl mx-auto text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-4">Serving Wayne, Oakland, and Macomb Counties</h2>
              <p className="text-lg mb-8">
                Our trained and licensed plumbers travel across the Northern Part of Detroit all day, any time; we will have an experienced Technician near you.
              </p>
              <ul className="text-left max-w-md mx-auto lg:mx-0 mb-8">
                {["Auburn Hills", "Berkley", "Birmingham", "Bloomfield Hills", "Pontiac", "Farmington Hills"].map((city, index) => (
                  <li key={index} className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-500">📍</span>
                    <span className="text-black text-base sm:text-lg">{city}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block bg-[#f6be00] text-black px-6 py-3 rounded shadow text-lg font-medium hover:opacity-90"
              >
                Request Service
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <Image
              src="/image-9-1.png"
              alt="Service Area"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
