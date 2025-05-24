"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";

import { api } from "@/convex/_generated/api";

import SideBar from "../_components/SideBar";
import DesignHeader from "../_components/DesignHeader";

function DesignEditor() {
  const { designId } = useParams();
  const DesignInfo = useQuery(api.designs.GetDesign, {
    id: designId,
  });

  return (
    <div>
      <DesignHeader DesignInfo={DesignInfo} />
      <div className="flex">
        <SideBar />
      </div>
    </div>
  );
}

export default DesignEditor;
