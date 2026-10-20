import React from 'react';
import ExerciseCard from '../component/ExerciseCard';
import Banner from '../component/Banner';



const WorkoutsPage = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();

    return (
        <>
            {/* Banner Section */}
            <Banner />

            {/* Workouts Library Section */}
            <div className="container mx-auto py-8 px-4">

                <div className="mb-6">
                    <h1 className="text-3xl font-bold">
                        The Library
                    </h1>

                    <p className="text-gray-400 text-base mt-2">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
                    {data.map((item) => (
                        <ExerciseCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default WorkoutsPage;
