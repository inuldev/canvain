import { Canvas } from "fabric";
import React, { useEffect, useRef } from "react";

import { useCanvasHook } from "@/hooks/useCanvas";

function CanvasEditor({ DesignInfo }) {
  const canvasRef = useRef();
  const { canvasEditor, setCanvasEditor } = useCanvasHook();

  /**
   * Gunakan untuk menginisialisasi canvas
   */
  useEffect(() => {
    if (canvasRef.current && DesignInfo) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: DesignInfo?.width,
        height: DesignInfo?.height,
        backgroundColor: "#fff",
        preserveObjectStacking: true,
        controlsAboveOverlay: true,
      });

      if (DesignInfo?.jsonTemplate) {
        initCanvas.loadFromJSON(DesignInfo?.jsonTemplate, () => {
          initCanvas?.requestRenderAll();
        });
      }

      initCanvas.renderAll();

      setCanvasEditor(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, [DesignInfo]);

  /**
   * Gunakan untuk menghapus objek yang dipilih
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key == "Delete" || event?.key !== "Backspace") {
        if (canvasEditor) {
          const activeObject = canvasEditor.getActiveObject();
          if (activeObject) {
            canvasEditor.remove(activeObject);
            canvasEditor.renderAll();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [canvasEditor]);

  return (
    <div className="bg-secondary w-full h-screen ">
      <div
        className=" flex mt-10 items-center justify-center
        flex-col relative"
      >
        <canvas id="canvas" ref={canvasRef} />
      </div>
    </div>
  );
}

export default CanvasEditor;
