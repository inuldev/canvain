"use client";

import Image from "next/image";

import { canvasSizeOptions } from "@/services/Options";

function IntroOptions() {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/banner-home.png"}
          alt="banner"
          width={1800}
          height={300}
          className="w-full h-[200px] rounded-2xl object-cover"
        />
        <h2 className="text-3xl absolute bottom-5 left-10 text-white">
          Selamat Datang
        </h2>
      </div>
      <div className="flex gap-6 items-center mt-10 justify-center flex-wrap">
        {canvasSizeOptions.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
          >
            <Image
              src={option.icon}
              alt={option.name}
              width={60}
              height={60}
              className="hover:scale-105 transition-all aspect-square w-[50px] h-[50px]"
            />
            <h2 className="text-xs mt-2 font-medium text-center">
              {option.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntroOptions;
