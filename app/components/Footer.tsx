import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00033d] text-white text-sm pt-10 pb-6 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col items-center text-center">
          <Image src="/full_Logo_customcolor_6-5-23.png" alt="LeakFinder Logo" width={300} height={120} />
          <div className="mt-4 text-center">
            <div>#8112263 Master Plumber</div>
            <div>#8003618 Plumbing Contractor</div>
            <div>#7115733 Mechanical Contractor</div>
            <div>#710682305910 EPA Contractor</div>
          </div>
        </div>

        <div className="ml-6">
          <h4 className="font-bold text-xl mb-2">Services</h4>
          <ul className="space-y-1">
            <li><Link href="/services/plumbing" className="hover:underline">Plumbing</Link></li>
            <li><Link href="/services/water-cleanup" className="hover:underline">Water Cleanup</Link></li>
            <li><Link href="/services/gas" className="hover:underline">Gas</Link></li>
            <li><Link href="/services/heating" className="hover:underline">Heating</Link></li>
            <li><Link href="/services/cooling" className="hover:underline">Cooling</Link></li>
            <li><Link href="/services/air-quality" className="hover:underline">Indoor Air Quality</Link></li>
            <li><Link href="/services/electrical" className="hover:underline">Electrical</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <div className="flex items-start gap-2 mb-2">
            <FaPhone className="mt-1" />
            <span>(888) 251-1270</span>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <FaEnvelope className="mt-1" />
            <a href="/contact" className="underline">Contact Us</a>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <FaMapMarkerAlt className="mt-1" />
            <span>2142 Pontiac Road, Suite 201<br />Auburn Hills, Michigan 48326</span>
          </div>
          <div className="flex items-start gap-2">
            <FaClock className="mt-1" />
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
