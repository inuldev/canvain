"use client";

import { Suspense } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

import Provider from "./provider";

function ConvexClientProvider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <ConvexProvider client={convex}>
      <Suspense fallback={<div>Memulai...</div>}>
        <Provider>{children}</Provider>
      </Suspense>
    </ConvexProvider>
  );
}

export default ConvexClientProvider;
