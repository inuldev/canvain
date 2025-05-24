import Link from "next/link";
import Image from "next/image";
import { Download, Save } from "lucide-react";
import { UserButton } from "@stackframe/stack";

import { Button } from "@/components/ui/button";

function DesignHeader({ DesignInfo }) {
  return (
    <div className="p-3 flex justify-between bg-gradient-to-r from-purple-700 via-blue-400 to-sky-600">
      <Link href={"/workspace"}>
        <Image src={"/logo.png"} alt="logo" width={100} height={60} />
      </Link>
      <input
        placeholder="Nama Desain"
        className="text-white border-none outline-none"
        defaultValue={DesignInfo?.name}
      />
      <div className="flex gap-5">
        <Button>
          <Save /> Simpan
        </Button>
        <Button>
          <Download /> Export
        </Button>
        <UserButton />
      </div>
    </div>
  );
}

export default DesignHeader;
