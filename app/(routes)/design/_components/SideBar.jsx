import { useState } from "react";

import { sideBarMenu } from "@/services/Options";

import SideBarSettings from "./SideBarSettings";

function SideBar() {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className="flex">
      <div className="p-2 w-[120px] border-r h-screen pt-2">
        {sideBarMenu.map((menu, index) => (
          <div
            key={index}
            className={`p-2 mb-3 flex flex-col items-center hover:bg-secondary cursor-pointer
              ${menu.name == selectedOption?.name && "bg-secondary"}`}
            onClick={() => setSelectedOption(menu)}
          >
            <menu.icon strokeWidth={1.5} />
            <h2 className="mt-1">{menu.name}</h2>
          </div>
        ))}
      </div>
      <SideBarSettings selectedOption={selectedOption} />
    </div>
  );
}

export default SideBar;
