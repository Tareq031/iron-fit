import React from 'react';
import Image from 'next/image';
import bannerimg from '@/assets/banner.png'


const Banner = () => {
  return (
    <section className="container mx-auto">
      <div className="mx-auto flex min-h-[270px] max-w-6xl items-center justify-between border border-dashed border-cyan-500/50 px-6 py-8 md:px-10">
        {/* Left Content */}
        <div className="max-w-lg">
          <p className="mb-4 text-[9px] font-bold uppercase tracking-[2px] text-[#c6ff00]">
            Workout Library
          </p>

          <h1 className="text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-[40px]">
            Train with intent. Log
            <br />
            every set.
          </h1>

          <p className="mt-3 max-w-md text-[11px] leading-5 text-gray-400 sm:text-xs">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="mt-4 rounded-md bg-[#c6ff00] px-4 py-2 text-[10px] font-bold uppercase text-black transition hover:bg-[#b0e600]">
            Browse Workouts
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden h-[230px] w-[240px] shrink-0 items-center justify-center sm:flex">
          <Image width={400} height={400}
            src={bannerimg}
            alt="Workout training illustration"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

