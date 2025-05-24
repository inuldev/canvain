"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { CanvasContext } from "@/context/CanvasContext";

import SideBar from "../_components/SideBar";
import DesignHeader from "../_components/DesignHeader";
import CanvasEditor from "../_components/CanvasEditor";

function DesignEditor() {
  const { designId } = useParams();
  const [canvasEditor, setCanvasEditor] = useState();

  const DesignInfo = useQuery(api.designs.GetDesign, {
    id: designId,
  });

  return (
    <div>
      <CanvasContext.Provider value={{ canvasEditor, setCanvasEditor }}>
        <DesignHeader DesignInfo={DesignInfo} />
        <div className="flex">
          <SideBar />
          <CanvasEditor DesignInfo={DesignInfo} />
        </div>
      </CanvasContext.Provider>
    </div>
  );
}

export default DesignEditor;
