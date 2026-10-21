
"use client";

import React, { useState } from "react";
import Link from "next/link";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState("Saved");
  const [sortBy, setSortBy] = useState("Duration");

  return (
    <div className="min-h-screen bg-[#0e1014] text-white">
      

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-5 py-7">
        {/* Page Heading */}
        <section>
          <h1 className="text-2xl font-extrabold uppercase tracking-tight">
            My Plan
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        {/* Statistics */}
        <section className="mt-6 grid grid-cols-1 gap-3 rounded-xl border border-[#252932] bg-[#14171e] p-4 sm:grid-cols-3">
          <div className="border-b border-[#252932] pb-3 sm:border-b-0 sm:border-r sm:pb-0">
            <p className="text-xs text-gray-500">Exercises</p>
            <h2 className="mt-1 text-2xl font-extrabold text-[#c8ff00]">
              0
            </h2>
          </div>

          <div className="border-b border-[#252932] pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pl-5">
            <p className="text-xs text-gray-500">Minutes</p>
            <h2 className="mt-1 text-2xl font-extrabold">0</h2>
          </div>

          <div className="sm:pl-5">
            <p className="text-xs text-gray-500">Calories</p>
            <h2 className="mt-1 text-2xl font-extrabold">0</h2>
          </div>
        </section>

        {/* Tabs and Sorting */}
        <section className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex rounded-xl border border-[#252932] bg-[#14171e] p-1">
            <button
              onClick={() => setActiveTab("Today's Plan")}
              className={`rounded-lg px-4 py-2 text-xs transition ${
                activeTab === "Today's Plan"
                  ? "bg-[#242832] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
                Todays Plan
            </button>

            <button
              onClick={() => setActiveTab("Saved")}
              className={`rounded-lg px-4 py-2 text-xs transition ${
                activeTab === "Saved"
                  ? "bg-[#242832] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-xs text-gray-500"
            >
              Sort By
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-[#292d36] bg-[#14171e] px-3 py-2 text-xs text-gray-300 outline-none focus:border-[#c8ff00]"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
              <option value="Name">Name</option>
            </select>
          </div>
        </section>

        {/* Empty State */}
        <section className="mt-4 flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-[#292d36] px-5 py-12 text-center sm:min-h-[300px]">
          <h2 className="text-lg font-extrabold uppercase tracking-wide">
            Nothing Here Yet
          </h2>

          <p className="mt-2 max-w-sm text-xs leading-5 text-gray-500">
            {activeTab === "Saved"
              ? "Browse the library and save a lift to get moving."
              : "Your plan is empty. Add a workout to start your day."}
          </p>

          <Link
            href="/Workouts"
            className="mt-5 rounded-full bg-[#c8ff00] px-6 py-3 text-xs font-bold text-black transition hover:bg-[#b5e600]"
          >
            Go to workouts
          </Link>
        </section>
      </main>

     
    </div>
  );
};

export default MyPlanPage;
