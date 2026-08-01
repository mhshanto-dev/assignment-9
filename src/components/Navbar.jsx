"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* Left */}
        <div className="flex items-center">
          <button
            className="md:hidden mr-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <Link href="/" className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
            StudyNook
          </Link>
        </div>

        {/* Middle */}
        <ul className="hidden md:flex gap-6">
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

        {/* Right */}
        <div className="hidden md:flex gap-3">
            <Link
              href="/profile"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full border px-4 py-2 rounded">
                Profile
              </button>
            </Link>
          <Link href="/login">
            <button className="border px-4 py-2 rounded">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Register
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
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

          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/profile"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full border px-4 py-2 rounded">
                Profile
              </button>
            </Link>
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full border px-4 py-2 rounded">
                Login
              </button>
            </Link>

            <Link
              href="/register"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;