import React, { lazy, Suspense } from 'react';

const LazyChartTypeChoice = lazy(() => import('./ChartTypeChoice'));

const ChartTypeChoice = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyChartTypeChoice {...props} />
  </Suspense>
);

export default ChartTypeChoice;
