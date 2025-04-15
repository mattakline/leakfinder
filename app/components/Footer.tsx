import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#00033d] text-white text-sm pt-10 pb-6 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col items-start">
          <Image src="/full_Logo_customcolor_6-5-23.png" alt="LeakFinder Logo" width={300} height={120} />
          <div className="mt-4 text-center">
            <div>#8112263 Master Plumber</div>
            <div>#8003618 Plumbing Contractor</div>
            <div>#7115733 Mechanical Contractor</div>
            <div>#710682305910 EPA Contractor</div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-2">Services</h4>
          <ul className="space-y-1">
            <li><a href="/services/plumbing" className="hover:underline">Plumbing</a></li>
            <li><a href="/services/water-cleanup" className="hover:underline">Water Cleanup</a></li>
            <li><a href="/services/gas" className="hover:underline">Gas</a></li>
            <li><a href="/services/heating" className="hover:underline">Heating</a></li>
            <li><a href="/services/cooling" className="hover:underline">Cooling</a></li>
            <li><a href="/services/air-quality" className="hover:underline">Indoor Air Quality</a></li>
            <li><a href="/services/electrical" className="hover:underline">Electrical</a></li>

          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <div className="flex items-start gap-2 mb-2">
            <Image src="/icons/phone.svg" alt="Phone" width={20} height={20} />
            <span>(888) 251-1270</span>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <Image src="/icons/mail.svg" alt="Mail" width={20} height={20} />
            <a href="/contact" className="underline">Contact Us</a>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <Image src="/icons/location.svg" alt="Location" width={20} height={20} />
            <span>2142 Pontiac Road, Suite 201<br />Auburn Hills, Michigan 48326</span>
          </div>
          <div className="flex items-start gap-2">
            <Image src="/icons/clock.svg" alt="24/7" width={20} height={20} />
            <span>24/7 Live Answering</span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} LeakFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
