"use client";

import React from "react";
import { Ironstype } from "@/app/type/ironstype";
import { useExercise } from "@/app/context/ExerciseContext";

const SaveButton = ({ exercise }: { exercise: Ironstype }) => {
  const { saveForLater } = useExercise();

  return (
    <button
      type="button"
      onClick={() => saveForLater(exercise)}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#292d36] px-4 py-3 text-xs font-medium text-white transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
    >
      <span>♡</span>
      Save for Later
    </button>
  );
};

export default SaveButton;