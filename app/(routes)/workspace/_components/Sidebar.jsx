"use client";

import { CirclePlus } from 'lucide-react'
import { usePathname, useRouter } from "next/navigation";

import { WorkspaceMenu } from "@/services/Options";

function Sidebar() {
  const path = usePathname();
  const router = useRouter();

  return (
    <div className="h-screen shadow-sm p-2 bg-purple-50">
      <div className="p-2 flex items-center flex-col hover:cursor-pointer mb-5">
        <CirclePlus className="bg-purple-600 text-white rounded-full h-8 w-8" />
        <h2 className="text-sm text-purple-600">Create</h2>
      </div>

      {WorkspaceMenu.map((menu, index) => (
        <div
          key={index}
          className={`p-2 flex items-center flex-col mb-4
                group hover:bg-purple-100 rounded-xl cursor-pointer
                ${menu.path == path && "bg-purple-100"}
                `}
          onClick={() => router.push(menu.path)}
        >
          <menu.icon
            className={`group-hover:text-purple-800 ${menu.path == path && "bg-purple-100"}`}
            strokeWidth={1.5}
          />
          <h2
            className={`text-sm group-hover:text-purple-800 ${menu.path == path && "bg-purple-100"}`}
          >
            {menu.name}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
