import Button from "@/components/common/Button";
import { Bird, Lock, Mail, Phone, User } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import React, { useState } from "react";
import AppImage from "@/components/common/AppImage";

function login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <section className="min-h-screen bg-merino-50 flex">
      {/* left side form */}
      <div className="flex-1 flex items-center justify-center p-8 ">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 ">
              <Bird className="text-merino-600 h-8 w-8" />
              <h1 className="text-black text-2xl font-poppins font-bold">
                Pionus Safaris
              </h1>
            </Link>

            <h2 className="mb-2 text-merino-950 text-2xl font-bold">
              {isLogin ? "Welcome Back" : "Start Your Adventure"}
            </h2>
            <p className="text-merino-700">
              {isLogin
                ? "Sign in to access your safari bookings"
                : "Create an account to book your safari"}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 ">
            <form className="space-y-5">
              {!isLogin && (
                <div>
                  <label className="block mb-2 text-sm text-merino-800">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-merino-600"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 border border-merino-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tahiti-gold-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block mb-2 text-sm text-merino-800">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-merino-600"
                    size={18}
                  />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-merino-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tahiti-gold-500 focus:border-transparent"
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block mb-2 text-sm text-merino-800">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-merino-600"
                      size={18}
                    />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-10 pr-4 py-3 border border-merino-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tahiti-gold-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block mb-2 text-sm text-merino-800">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-merino-600"
                    size={18}
                  />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 border border-merino-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tahiti-gold-500 focus:border-transparent"
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block mb-2 text-sm text-merino-800">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-merino-600"
                      size={18}
                    />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 border border-merino-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-tahiti-gold-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-tahiti-gold-500 border-merino-300 rounded focus:ring-tahiti-gold-500"
                    />
                    <span className="text-merino-700">Remember me</span>
                  </label>
                  <a href="#" className="text-tahiti-gold-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-lg bg-tahiti-gold-500 hover:bg-tahiti-gold-600"
                type="submit"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center ">
              <p className="text-sm text-merino-700">
                {isLogin
                  ? "Don't have an account? "
                  : " Already have an account? "}
                <Button
                  variant="outline"
                  size="sm"
                  className="text-tahiti-gold-500 hover:underline rounded"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </Button>
              </p>
            </div>

            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-merino-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-merino-600">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 ">
              <Button variant="outline" size="md" className="rounded-lg">
                <FcGoogle /> Google
              </Button>
              <Button variant="outline" size="md" className="rounded-lg">
                <FaFacebook className="text-blue-500" /> Facebook
              </Button>
            </div>

            {!isLogin && (
              <p className="text-xs text-center text-merino-600 mt-6">
                By signing up, you agree to our{" "}
                <Link
                  href="/legal/terms"
                  className="text-tahiti-gold-500 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/legal/privacy"
                  className="text-tahiti-gold-500 hover:underline"
                >
                  Privacy Policy
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* image right side */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-cover bg-center">
          <AppImage
            variant="card"
            fill
            alt="giraffe"
            src="https://images.unsplash.com/photo-1763878119119-aff0820121fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjBqZWVwJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzY1NzA3Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-merino-900/80 to-tahiti-gold-500/40" />
        </div>
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="text-white text-center max-w-lg">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Your Safari Adventure Awaits
            </h2>
            <p className="text-xl text-merino-100 leading-relaxed">
              Join thousands of travelers exploring East Africa's most
              incredible wildlife and landscapes with verified local guides.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
login.getLayout = function getLayout(page: React.ReactElement) {
  return page;
};

export default login;
