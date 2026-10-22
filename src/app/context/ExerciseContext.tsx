"use client";
import { toast } from "react-toastify";

import React, {
createContext,
useContext,
useEffect,
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
const router = useRouter();

const [exercises, setExercises] = useState<Ironstype[]>([]);
const [selectedExercise, setSelectedExercise] = useState<Ironstype[]>([]);
const [isLoaded, setIsLoaded] = useState(false);

// Load data from localStorage
useEffect(() => {
const loadData = () => {
try {
const savedPlan = localStorage.getItem("myPlan");
const savedExercises = localStorage.getItem("savedExercises");

    if (savedPlan) {
      setExercises(JSON.parse(savedPlan));
    }

    if (savedExercises) {
      setSelectedExercise(JSON.parse(savedExercises));
    }
  } catch (error) {
    console.error("Failed to load saved exercises:", error);
  } finally {
    setIsLoaded(true);
  }
};

// Defer state updates until after the effect runs
const timer = window.setTimeout(loadData, 0);

return () => window.clearTimeout(timer);

}, []);

// Persist data after loading
useEffect(() => {
if (!isLoaded) return;

localStorage.setItem("myPlan", JSON.stringify(exercises));
localStorage.setItem(
  "savedExercises",
  JSON.stringify(selectedExercise)
);

}, [exercises, selectedExercise, isLoaded]);

// Add exercise to Today's Plan
const addToPlan = (exercise: Ironstype) => {
if (exercises.some((item) => item.id === exercise.id)) {
alert("${exercise.name} is already in Today's Plan!");
router.push("/MyPlan");
return;
}

if (exercises.length >= 5) {
  alert("Your plan is full! You can add up to 5 exercises.");
  router.push("/MyPlan");
  return;
}

setExercises((previous) => [...previous, exercise]);

toast.success(`${exercise.name} added to Today's Plan!`);
router.push("/MyPlan");

};

// Save exercise for later
const saveForLater = (exercise: Ironstype) => {
if (selectedExercise.some((item) => item.id === exercise.id)) {
alert("${exercise.name} is already in Saved!");
router.push("/MyPlan");
return;
}

setSelectedExercise((previous) => [...previous, exercise]);

toast.success(`${exercise.name} saved for later!`);
router.push("/MyPlan");

};

// Remove from Today's Plan
const removeFromPlan = (id: number) => {
setExercises((previous) =>
previous.filter((item) => item.id !== id)
);

toast.info("Exercise removed from Today's Plan!");

};

// Remove from Saved
const removeFromSaved = (id: number) => {
setSelectedExercise((previous) =>
previous.filter((item) => item.id !== id)
);

toast.info("Exercise removed from Saved!");

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
throw new Error(
"useExercise must be used inside ExerciseProvider"
);
}

return context;
};

export default ExerciseProvider;