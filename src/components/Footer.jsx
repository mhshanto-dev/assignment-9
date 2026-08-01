import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            StudyNook
          </h2>

          <p className="mt-3 text-gray-400 text-sm">
            Find the best study rooms, book your seat and enjoy a peaceful
            learning environment.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/rooms">Rooms</Link>
            </li>

            <li>
              <Link href="/add-room">Add Room</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Contact
          </h3>

          <p>Email: support@studynook.com</p>

          <p className="mt-2">
            Phone: +880 1800-000000
          </p>

          <p className="mt-2">
            Dhaka, Bangladesh
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">
            <Link href="#">
              <FaFacebook />
            </Link>

            <Link href="#">
              <FaGithub />
            </Link>

            <Link href="#">
              <FaLinkedin />
            </Link>

            <Link href="#">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {year} StudyNook. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;