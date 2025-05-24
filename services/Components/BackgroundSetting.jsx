import { useState } from "react";

import { useCanvasHook } from "@/hooks/useCanvas";

import ColorPickerEditor from "../Sharable/ColorPickerEditor";

function BackgroundSetting() {
  const [bgColor, setBgColor] = useState("#fff");
  const { canvasEditor } = useCanvasHook();

  /**
   * Gunakan untuk mengubah warna background
   * @param {*} color
   */
  const onColorChange = (color) => {
    setBgColor(color);
    canvasEditor?.set({
      backgroundColor: color,
      backgroundImage: null,
    });
    canvasEditor.renderAll();
  };

  return (
    <div>
      <ColorPickerEditor
        value={bgColor}
        onColorChange={(v) => onColorChange(v)}
      />
    </div>
  );
}

export default BackgroundSetting;
