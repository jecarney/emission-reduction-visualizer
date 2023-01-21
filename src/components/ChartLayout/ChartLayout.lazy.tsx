import React, { lazy, Suspense } from 'react';

const LazyChartLayout = lazy(() => import('./ChartLayout'));

const ChartLayout = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyChartLayout {...props} />
  </Suspense>
);

export default ChartLayout;
