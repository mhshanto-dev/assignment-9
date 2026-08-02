"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsMenuOpen(false);
    router.push("/login");
  };

  return (
    <nav className="border-b shadow-sm items-center justify-between">
      <div className="container items-center justify-between mx-auto flex px-4 py-4">
        {/* Left */}
        <div className="flex items-center">
          <button
            className="md:hidden mr-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400"
          >
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
          <li>
            <Link href="/my-bookings">MY Bookings</Link>
          </li>
        </ul>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <ul className="flex items-center gap-3">
              <li>
                <Link href="/profile">
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user.name}
                      src={user?.image}
                    />
                    <Avatar.Fallback>
                      {user.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                </Link>
              </li>
              <li>
                <Button
                  size="sm"
                  onClick={handleSignOut}
                  variant="danger"
                  className="rounded-none"
                >
                  Logout
                </Button>
              </li>
            </ul>
          ) : (
            <ul className="flex items-center gap-3">
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" onClick={() => setIsMenuOpen(false)}>
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/add-room" onClick={() => setIsMenuOpen(false)}>
                Add Room
              </Link>
            </li>
            <li>
              <Link href="/my-bookings" onClick={() => setIsMenuOpen(false)}>
                MY Bookings
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col gap-3 mt-4">
            <li className="text-sm text-gray-500">
              <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                Profile
              </Link>
            </li>

            {user ? (
              <>
                <li className="flex items-center gap-2">
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user.name}
                      src={user?.image}
                    />
                    <Avatar.Fallback>
                      {user.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                  <span>{user.name}</span>
                </li>
                <li>
                  <Button
                    size="sm"
                    onClick={handleSignOut}
                    variant="danger"
                    className="rounded-none w-full"
                  >
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;