import React from 'react';
import ExerciseCard from '../component/ExerciseCard';

const WorkoutsPage = async () => {

    const res= await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();

    return (
        <div className="grid grid-cols-3 gap-4 ">
            {
                data.map((item) => (<ExerciseCard key={item.id} item={item} />))
            }
           
        </div>
    );
};

export default WorkoutsPage;