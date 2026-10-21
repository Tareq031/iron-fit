'use client';
"use client";

import React from "react";
import { useExercise } from "../context/ExerciseContext";

const ListedPage = () => {
    const {exercises, setExercises} = useExercise();
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Listed Page</h1>
        </div>
    );
};

export default ListedPage;