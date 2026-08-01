"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center">
          <button
            className="md:hidden mr-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <Link href="/" className="text-2xl font-bold">
            StudyNook
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/rooms">Rooms</Link>
          </li>

          <li>
            <Link href="/add-room">Add Room</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/rooms"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </Link>
            </li>

            <li>
              <Link
                href="/add-room"
                onClick={() => setIsMenuOpen(false)}
              >
                Add Room
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;