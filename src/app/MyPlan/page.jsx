"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useExercise } from "@/app/context/ExerciseContext";
import { Ironstype } from "@/app/type/ironstype";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState("Today's Plan");
  const [sortBy, setSortBy] = useState("Duration");

  const {
    exercises,
    selectedExercise,
    removeFromPlan,
    removeFromSaved,
  } = useExercise();

  // Choose exercises according to the active tab
  const currentExercises =
    activeTab === "Today's Plan"
      ? exercises
      : selectedExercise;

  // Sort exercises
  const sortedExercises = useMemo(() => {
    return [...currentExercises].sort((a, b) => {
      if (sortBy === "Duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "Calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === "Rating") {
        return b.rating - a.rating;
      }

      if (sortBy === "Name") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });
  }, [currentExercises, sortBy]);

  // Calculate Today's Plan statistics
  const totalMinutes = exercises.reduce(
    (total, item) => total + item.duration,
    0
  );

  const totalCalories = exercises.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  // Remove exercise according to active tab
  const handleRemove = (id) => {
    if (activeTab === "Today's Plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1014] text-white">

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

          {/* Exercises */}
          <div className="border-b border-[#252932] pb-3 sm:border-b-0 sm:border-r sm:pb-0">
            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-[#c8ff00]">
              {exercises.length}
            </h2>
          </div>

          {/* Minutes */}
          <div className="border-b border-[#252932] pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pl-5">
            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <h2 className="mt-1 text-2xl font-extrabold">
              {totalMinutes}
            </h2>
          </div>

          {/* Calories */}
          <div className="sm:pl-5">
            <p className="text-xs text-gray-500">
              Calories
            </p>

            <h2 className="mt-1 text-2xl font-extrabold">
              {totalCalories}
            </h2>
          </div>

        </section>

        {/* Tabs and Sorting */}
        <section className="mt-5 flex flex-wrap items-center justify-between gap-3">

          {/* Tabs */}
          <div className="flex rounded-xl border border-[#252932] bg-[#14171e] p-1">

            <button
              type="button"
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
              type="button"
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

          {/* Sorting */}
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

        {/* Exercise List or Empty State */}
        {sortedExercises.length === 0 ? (

          /* Empty State */
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
              Go to Workouts
            </Link>

          </section>

        ) : (

          /* Exercise Cards */
          <section className="mt-4 space-y-3">

            {sortedExercises.map((exercise) => (

              <div
                key={exercise.id}
                className="flex flex-col gap-4 rounded-xl border border-[#252932] bg-[#14171e] p-3 transition hover:border-[#c8ff00]/40 sm:flex-row sm:items-center"
              >

                {/* Exercise Image */}
                <Image
                  src={exercise.image}
                  alt={exercise.name}
                  width={120}
                  height={90}
                  className="h-24 w-full rounded-lg object-cover sm:w-28"
                />

                {/* Exercise Information */}
                <div className="min-w-0 flex-1">

                  <h2 className="text-sm font-extrabold uppercase tracking-wide">
                    {exercise.name}
                  </h2>

                  <p className="mt-1 text-xs text-gray-400">
                    {exercise.equipment}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    <span className="rounded-full bg-[#20251a] px-3 py-1 text-[10px] text-[#c8ff00]">
                      {exercise.duration} min
                    </span>

                    <span className="rounded-full bg-[#20251a] px-3 py-1 text-[10px] text-gray-300">
                      {exercise.caloriesBurned} kcal
                    </span>

                    <span className="rounded-full bg-[#20251a] px-3 py-1 text-[10px] text-gray-300">
                      ⭐ {exercise.rating}
                    </span>

                  </div>

                </div>

                {/* Action Buttons */}
                <div className="flex shrink-0 flex-wrap items-center gap-2">

                  {/* View Details */}
                  <Link
                    href={`/Workouts/${exercise.id}`}
                    className="rounded-lg border border-[#292d36] px-4 py-2 text-xs text-gray-300 transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
                  >
                    View Details
                  </Link>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => handleRemove(exercise.id)}
                    className="rounded-lg bg-[#c8ff00] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#b5e600]"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </section>

        )}

      </main>

    </div>
  );
};

export default MyPlanPage;