"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { useRouter } from "next/navigation";
import { Ironstype } from "@/app/type/ironstype";

interface ExerciseContextType {
  exercises: Ironstype[];
  selectedExercise: Ironstype[];

  addToPlan: (exercise: Ironstype) => void;
  saveForLater: (exercise: Ironstype) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const ExerciseContext = createContext<ExerciseContextType | undefined>(
  undefined
);

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [exercises, setExercises] = useState<Ironstype[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Ironstype[]>([]);

  const router = useRouter();

  // Add exercise to Today's Plan
  const addToPlan = (exercise: Ironstype) => {
    if (exercises.some((item) => item.id === exercise.id)) {
      alert(`${exercise.name} is already in your plan!`);
      router.push("/MyPlan");
      return;
    }

    if (exercises.length >= 5) {
      alert("Your plan is full! You can add up to 5 exercises.");
      router.push("/MyPlan");
      return;
    }

    setExercises((previous) => [...previous, exercise]);

    alert(`${exercise.name} added to Today's Plan!`);

    router.push("/MyPlan");
  };

  // Save exercise for later
  const saveForLater = (exercise: Ironstype) => {
    if (selectedExercise.some((item) => item.id === exercise.id)) {
      alert(`${exercise.name} is already in Saved!`);
      router.push("/MyPlan");
      return;
    }

    setSelectedExercise((previous) => [...previous, exercise]);

    alert(`${exercise.name} saved for later!`);

    router.push("/MyPlan");
  };

  // Remove exercise from Today's Plan
  const removeFromPlan = (id: number) => {
    setExercises((previous) =>
      previous.filter((item) => item.id !== id)
    );

    alert("Exercise removed from Today's Plan!");
  };

  // Remove exercise from Saved
  const removeFromSaved = (id: number) => {
    setSelectedExercise((previous) =>
      previous.filter((item) => item.id !== id)
    );

    alert("Exercise removed from Saved!");
  };

  const sharedData: ExerciseContextType = {
    exercises,
    selectedExercise,
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
  };

  return (
    <ExerciseContext.Provider value={sharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExercise = () => {
  const context = useContext(ExerciseContext);

  if (!context) {
    throw new Error("useExercise must be used inside ExerciseProvider");
  }

  return context;
};

export default ExerciseProvider;