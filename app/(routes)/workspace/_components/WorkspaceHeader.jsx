import React from "react";
import Image from "next/image";
import { UserButton } from "@stackframe/stack";

function WorkspaceHeader() {
  return (
    <div className="p-2 flex justify-between items-center bg-gradient-to-r from-purple-700 via-blue-400 to-sky-600">
      <Image src={"/logo.png"} alt="logo" width={100} height={60} />
      <UserButton />
    </div>
  );
}

export default WorkspaceHeader;
