import { useContext } from "react";

import { CanvasContext } from "@/context/CanvasContext";

export const useCanvasHook = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error(
      "useCanvasHook harus digunakan dalam CanvasContext.Provider"
    );
  }

  return context;
};
