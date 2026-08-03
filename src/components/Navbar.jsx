"use client";
import ThemeToggle from "@/components/ThemeToggle";
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

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className="font-medium transition-colors duration-200 hover:text-primary"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/rooms"
          className="font-medium transition-colors duration-200 hover:text-primary"
        >
          Rooms
        </Link>
      </li>
      <li>
        <Link
          href="/add-room"
          className="font-medium transition-colors duration-200 hover:text-primary"
        >
          Add Room
        </Link>
      </li>
      <li>
        <Link
          href="/my-bookings"
          className="font-medium transition-colors duration-200 hover:text-primary"
        >
          My Bookings
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 border-b bg-base-100/90 backdrop-blur shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>

          <Link
            href="/"
            className="text-2xl font-bold text-primary tracking-tight"
          >
            StudyNook
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">{navLinks}</ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          {user ? (
            <>
              <Link href="/profile">
                <Avatar className="cursor-pointer">
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    src={user.image}
                    alt={user.name}
                  />
                  <Avatar.Fallback>
                    {user.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
              </Link>

              <Button
                color="danger"
                radius="full"
                size="sm"
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="bordered" radius="full">
                  Login
                </Button>
              </Link>

              <Link href="/signup">
                <Button color="primary" radius="full">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Right (theme toggle always visible, even before menu opens) */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-base-100 px-4 py-5 shadow-lg">
          <ul className="flex flex-col gap-5">
            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium hover:text-primary"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/rooms"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium hover:text-primary"
              >
                Rooms
              </Link>
            </li>

            <li>
              <Link
                href="/add-room"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium hover:text-primary"
              >
                Add Room
              </Link>
            </li>

            <li>
              <Link
                href="/my-bookings"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium hover:text-primary"
              >
                My Bookings
              </Link>
            </li>
          </ul>

          <div className="mt-6 border-t pt-5">
            {user ? (
              <>
                <div className="flex items-center gap-3 mb-5">
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      src={user.image}
                      alt={user.name}
                    />
                    <Avatar.Fallback>
                      {user.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>

                  <div>
                    <h4 className="font-semibold">{user.name}</h4>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>

                <Link
                  href="/profile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="bordered"
                    radius="full"
                    className="w-full mb-3"
                  >
                    Profile
                  </Button>
                </Link>

                <Button
                  color="danger"
                  radius="full"
                  className="w-full"
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="bordered"
                    radius="full"
                    className="w-full"
                  >
                    Login
                  </Button>
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    color="primary"
                    radius="full"
                    className="w-full"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;