"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";
import { useExercise } from "@/app/context/ExerciseContext";

const Navbar = () => {
  const { exercises, selectedExercise } = useExercise();

  const Links = (
    <>
      <li>
        <Link
          href="/Workouts"
          className="rounded-full bg-[#1c2610] px-5 py-2 text-[#c6ff00]"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/MyPlan"
          className="px-3 py-2 text-[#a1a1aa] transition hover:text-white"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <header className="border-b-2 border-[#292a2e] bg-[#0c0c0e] text-white">
      <nav className="container mx-auto flex h-[86px] w-full items-center justify-between px-5 md:px-7">

        {/* Logo */}
        <Link href="/Workouts" className="flex shrink-0 items-center gap-3">
          <Image
            src={logo}
            alt="FitLog Logo"
            className="h-8 w-8 object-contain"
          />

          <span className="text-xl font-black tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-2 text-xs font-semibold">
            {Links}
          </ul>
        </div>

        {/* Right Side: Plan and Saved Count */}
        <div className="flex items-center gap-5 text-xs font-semibold">

          {/* Plan Count */}
          <Link
            href="/MyPlan"
            className="flex items-center gap-2"
          >
            <span className="text-gray-400">Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c6ff00] px-1 text-[11px] font-bold text-black">
              {exercises.length}
            </span>
          </Link>

          {/* Saved Count */}
          <Link
            href="/MyPlan"
            className="flex items-center gap-2"
          >
            <span className="text-gray-400">Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#3b3b42] px-1 text-[11px] text-gray-300">
              {selectedExercise.length}
            </span>
          </Link>

        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="border-t border-[#222328] px-4 py-3 md:hidden">
        <ul className="flex items-center justify-center gap-4 text-xs font-semibold">
          {Links}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;