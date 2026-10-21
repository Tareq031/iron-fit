"use client";

import React from "react";
import { Ironstype } from "@/app/type/ironstype";
import { useExercise } from "@/app/context/ExerciseContext";

const ReadButton = ({ exercise }: { exercise: Ironstype }) => {
  const { addToPlan } = useExercise();

  return (
    <button
      type="button"
      onClick={() => addToPlan(exercise)}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c8ff00] px-4 py-3 text-xs font-medium text-black transition hover:bg-[#b0e600]"
    >
      <span>+</span>
      Add to My Plan
    </button>
  );
};

export default ReadButton;