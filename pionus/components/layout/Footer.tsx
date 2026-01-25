import { Bird } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-merino-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bird className="text-merino-300 h-8 w-8" />

              <h1 className="text-white text-2xl font-poppins font-bold">
                <Link href="/">Pionus Safaris</Link>
              </h1>
            </div>
            <p className="text-merino-200">
              Experience the magic of East African safaris with verified guides
              and like minded travelers.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">Explore</h4>
            <ul>
              <li>
                <Link
                  href="/tours/tours"
                  className="text-merino-200 hover:text-tahiti-gold-500"
                >
                  Safari Tours
                </Link>
              </li>
              <li>
                <Link
                  href="groups/create"
                  className="text-merino-200 hover:text-tahiti-gold-500"
                >
                  Open Groups
                </Link>
              </li>
              <li>
                <Link
                  href="tours/tours"
                  className="text-merino-200 hover:text-tahiti-gold-500"
                >
                  Verified Guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Explore</h4>
            <ul>
              <li>
                <Link
                  href="/about/create"
                  className="text-merino-200 hover:text-tahiti-gold-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="contact/contact"
                  className="text-merino-200 hover:text-tahiti-gold-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="auth/login"
                  className="text-merino-200 hover:text-tahiti-gold-500"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 tetxt-white">Connect</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-merino-300 hover:text-tahiti-gold-500 transition-colors"
              >
                {" "}
                <FaFacebookF />{" "}
              </Link>
              <Link
                href="#"
                className="text-merino-300 hover:text-tahiti-gold-500 transition-colors"
              >
                {" "}
                <FaXTwitter />{" "}
              </Link>
              <Link
                href="#"
                className="text-merino-300 hover:text-tahiti-gold-500 transition-colors"
              >
                {" "}
                <FaInstagram />{" "}
              </Link>
              <Link
                href="#"
                className="text-merino-300 hover:text-tahiti-gold-500 transition-colors"
              >
                {" "}
                <CiMail />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-merino-800 pt-8 text-center text-sm text-merino-400">
          <p>&copy; 2026 Pionus Safaris </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
