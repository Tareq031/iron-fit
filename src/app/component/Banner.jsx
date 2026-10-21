import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bannerimg from '@/assets/banner.png';

const Banner = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex min-h-[340px] items-center justify-between gap-8 overflow-hidden rounded-2xl border border-white/5 bg-[#15161b] px-6 py-10 sm:px-10 md:min-h-[390px] md:px-14 lg:px-16">

        {/* Left Content */}
        <div className="z-10 max-w-2xl flex-1">
          <p className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[#c6ff00]">
            Workout Library
          </p>

          <h1 className="text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#c6ff00] px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-black transition duration-300 hover:bg-[#b0e600] hover:shadow-[0_0_25px_rgba(198,255,0,0.25)]"
          >
            Browse Workouts
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative hidden h-[280px] w-[280px] shrink-0 items-center justify-center sm:flex md:h-[320px] md:w-[320px] lg:h-[350px] lg:w-[350px]">
          <Image
            src={bannerimg}
            alt="Workout training illustration"
            fill
            priority
            sizes="(max-width: 768px) 280px, 350px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;