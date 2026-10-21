
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Ironstype } from "../../type/ironstype";
import ReadButton from "@/app/component/button/ReadButton";
import SaveButton from "@/app/component/button/SaveButton";


interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: IWorkoutDetailsPageProps) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workout details");
  }

  const workout: Ironstype = await res.json();

  const details = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    {
      label: "CALORIES",
      value: `${workout.caloriesBurned} kcal`,
    },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <main className=" min-h-screen bg-[#0e1014] px-4 py-8 text-white md:px-8 lg:py-10">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-7 lg:grid-cols-2 lg:gap-8">
        {/* Workout Image */}
        <div className="relative h-[340px] w-full overflow-hidden rounded-xl sm:h-[450px] lg:h-[560px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Workout Information */}
        <div className="flex flex-col gap-5">
          {/* Title and Description */}
          <div>
            <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
              {workout.name}
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-3 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c8ff00] px-3 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Workout Stats */}
          <div className="overflow-hidden rounded-xl border border-[#242831] bg-[#171a22]">
            {details.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center justify-between gap-4 px-4 py-3 ${
                  index !== details.length - 1
                    ? "border-b border-[#242831]"
                    : ""
                }`}
              >
                <span className="text-[10px] font-semibold tracking-widest text-gray-400">
                  {item.label}
                </span>

                <span className="text-right text-xs font-medium text-gray-200">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <section>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="space-y-2">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-xs leading-5 text-gray-400"
                >
                  <span className="shrink-0 text-gray-500">
                    {index + 1}.
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
         <ReadButton exercise={workout}/>
              

        <SaveButton exercise={workout}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
