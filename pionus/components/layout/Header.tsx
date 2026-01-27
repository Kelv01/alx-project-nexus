import React, { useState } from "react";
import Link from "next/link";
import { Bird, Menu, User, UserLock, X } from "lucide-react";
import { useRouter } from "next/router";
import { navLinks } from "@/constants/nav_links";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const router = useRouter();

  return (
    <header>
      <nav className="font-serif sticky top-0 z-50 bg-white flex justify-between items-center w-full py-6 px-8">
        {/* logo section */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="inline-flex items-center gap-2  ">
            {" "}
            <Bird className="text-merino-600 h-8 w-8" />
            <h1 className="text-black text-2xl font-poppins font-bold">
              Pionus Safaris
            </h1>
          </Link>
        </div>

        {/* desktop navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <ul className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`${
                      router.pathname === link.href
                        ? "text-merino-600 font-bold"
                        : "text-black hover:text-merino-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Login/Logout Buttons */}
        <div className="hidden md:block">
          {isSignedIn ? (
            <button
              onClick={() => setIsSignedIn(false)}
              className="bg-red hover:bg-merino-600 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <User className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          ) : (
            <Link
              href="/auth/login"
              className="bg-merino-600 hover:bg-merino-600 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <UserLock className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="ml-4 text-merino-600 text-3xl md:hidden"
        >
          <Menu />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-merino-600 text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-6 border-b font-serif">
          <h2 className="text-lg font-bold">Menu</h2>

          <X onClick={() => setIsMenuOpen(false)} />
        </div>

        <ul className="flex flex-col gap-6 p-6 text-white font-serif">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`${
                  router.pathname === link.href
                    ? "text-shadow-merino-200 font-bold"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* LOGGING BUTTONS at the bottom left of the hamburger menu */}
        <div className="flex justify-start p-6 mt-46">
          {isSignedIn ? (
            <button
              onClick={() => setIsSignedIn(false)}
              className="bg-merino-600 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <User className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          ) : (
            <Link
              href="/signin"
              className="bg-400 text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <UserLock className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
