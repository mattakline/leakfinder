'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
<header className="fixed top-0 left-0 w-full bg-[#00033d] shadow-md z-50 text-white">      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-30">
          <Link href="/">
            <Image src="/full_Logo_customcolor_6-5-23.png" alt="LeakFinder" width={240} height={60} />
          </Link>
          <nav className="hidden md:flex flex-wrap gap-x-6 ml-4 text-m font-medium w-full">
            <Link href="/services/plumbing" className="hover:text-yellow-400">Plumbing</Link>
            <Link href="/services/water-cleanup" className="hover:text-yellow-400">Water Cleanup</Link>
            <Link href="/services/drains" className="hover:text-yellow-400">Drains</Link>
            <Link href="/services/gas" className="hover:text-yellow-400">Gas</Link>
            <Link href="/services/heating" className="hover:text-yellow-400">Heating</Link>
            <Link href="/services/cooling" className="hover:text-yellow-400">Cooling</Link>
            <Link href="/services/indoor-air-quality" className="hover:text-yellow-400">Indoor Air Quality</Link>
            <Link href="/services/electrical" className="hover:text-yellow-400">Electrical</Link>
            <Link href="/offers" className="hover:text-yellow-400">Offers</Link>
            <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
            <Link href="/about" className="hover:text-yellow-400">About</Link>
          </nav>
          <div className="text-base sm:text-lg font-semibold block bg-[#f6be00] text-black px-3 py-1 rounded">
            <span className="whitespace-nowrap">Call Now: <a href="tel:2484671761" className="font-bold underline">248-467-1761</a></span>
          </div>
        </div>
      </div>
    </header>
  );
}