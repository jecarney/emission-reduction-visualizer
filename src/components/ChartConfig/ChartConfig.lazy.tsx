import React, { lazy, Suspense } from 'react';

const LazyChartConfig = lazy(() => import('./ChartConfig'));

const ChartConfig = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyChartConfig {...props} />
  </Suspense>
);

export default ChartConfig;
