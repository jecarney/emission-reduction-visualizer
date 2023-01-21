import React, { lazy, Suspense } from 'react';

const LazySummary = lazy(() => import('./Summary'));

const Summary = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazySummary {...props} />
  </Suspense>
);

export default Summary;
