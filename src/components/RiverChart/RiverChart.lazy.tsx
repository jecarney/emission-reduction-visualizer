import React, { lazy, Suspense } from "react";

const LazyRiverChart = lazy(() => import("./RiverChart"));

const RiverChart = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyRiverChart {...props} />
  </Suspense>
);

export default RiverChart;
