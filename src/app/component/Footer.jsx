import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5 border-t border-[#20232a]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 sm:flex-row sm:items-center">

       {/* Logo */}
        <Link href="/Workouts" className="flex shrink-0 items-center gap-3">
          <Image width={32} height={32}
            src={logo}
            alt="FitLog Logo"
            className="h-8 w-8 object-contain"
          />

          <span className="text-xl font-black tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-[10px] text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;