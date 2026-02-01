import Link from "next/link";
import { Home, Search, Compass, ArrowLeft, Bird } from "lucide-react";
import { useRouter } from "next/router";
import type { ReactElement } from "react";

export default function NotFoundPage() {
  const router = useRouter();

  const popularLinks = [
    { href: "/tours", label: "Browse Tours", icon: Search },
    { href: "/groups", label: "Join Groups", icon: Compass },
    { href: "/about", label: "About Us", icon: Bird },
  ];

  return (
    <div className="min-h-screen bg-merino-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <div className="text-center">
          <div className="mb-8 relative">
            <h1
              className="text-[180px] md:text-[240px] leading-none text-merino-200 select-none"
              style={{ fontFamily: "var(--font-family-serif)" }}
            >
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400"
                alt="Lost in the Safari"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl mb-4 text-merino-950">
            Oops! You've Wandered Off the Safari Path
          </h2>
          <p className="text-lg text-merino-700 mb-8 max-w-2xl mx-auto">
            The page you're looking for seems to have migrated to greener
            pastures. Don't worry, we'll help you find your way back to the
            adventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-tahiti-gold-500 text-white rounded-lg hover:bg-[#d35400] transition-colors shadow-md"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-merino-300 text-merino-900 rounded-lg hover:bg-merino-100 transition-colors"
            >
              <Home className="w-5 h-5" />
              Home Page
            </Link>
          </div>

          <div className="mb-12">
            <h3 className="text-sm text-merino-600 mb-4 uppercase tracking-wider">
              Popular Destinations
            </h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {popularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <link.icon className="w-8 h-8 text-tahiti-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-merino-900">{link.label}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-tahiti-gold-500 text-white rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3
              className="text-xl mb-3"
              style={{ fontFamily: "var(--font-family-serif)" }}
            >
              Did You Know?
            </h3>
            <p className="text-white/90">
              While you were lost, a cheetah can run up to 70 mph (112 km/h),
              making it the fastest land animal. But don't worry, our safaris
              are much more relaxed!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
NotFoundPage.getLayout = function getLayout(page: ReactElement) {
  return page;
};
