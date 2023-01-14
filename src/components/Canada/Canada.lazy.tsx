import React, { lazy, Suspense } from 'react';

const LazyCanada = lazy(() => import('./Canada'));

const Canada = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCanada {...props} />
  </Suspense>
);

export default Canada;
