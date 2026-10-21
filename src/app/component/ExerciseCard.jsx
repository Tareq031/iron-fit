import React from "react";
import Image from "next/image";
const ExerciseCard = ({ item }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#292b32] bg-[#15161b] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c6ff00]/50">

      {/* Exercise Image */}
      <div className="h-[180px] w-full overflow-hidden">
        <Image
          width={400}
          height={400}
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Muscle Group Badges */}
        <div className="mb-4 flex flex-wrap gap-2">
          {item.muscleGroups.map((muscle, index) => (
            <span
              key={`${muscle}-${index}`}
              className="rounded-full bg-[#c6ff00] px-3 py-1 text-[10px] font-extrabold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <h2 className="text-lg font-extrabold uppercase leading-tight tracking-wide">
          {item.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-xs text-gray-400">
          {item.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-[#292b32]" />

        {/* Workout Stats */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">

          {/* Duration */}
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            {item.duration} min
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8 7 5 10 5 14a7 7 0 0 0 14 0c0-3-2-7-7-12Z" />
            </svg>
            {item.caloriesBurned} kcal
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1L12 2Z" />
            </svg>
            {item.rating?.toFixed(1)}
          </span>

        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
