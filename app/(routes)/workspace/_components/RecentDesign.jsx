"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

function RecentDesign() {
  const [designList, setDesignList] = useState([]);

  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl">Desain Terakhir</h2>

      {designList?.length == 0 ? (
        <div className="flex flex-col gap-4 items-center mt-5">
          <Image src={"/edittool.png"} alt="edit" width={100} height={100} />
          <h2 className="text-center">
            Tidak ada desain yang dibuat, silahkan buat desain baru!
          </h2>
          <Button>+ Buat Desain Baru</Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
          {designList?.map((design, index) => (
            <div key={index} className="bg-secondary rounded-lg">
              {design?.imagePreview ? (
                <Image
                  src={design?.imagePreview}
                  alt={design?.name}
                  width={300}
                  height={300}
                  className="w-full cursor-pointer h-[200px] object-contain rounded-lg"
                />
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentDesign;
