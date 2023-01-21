import React, { lazy, Suspense } from 'react';

const LazyCategorized = lazy(() => import('./Categorized'));

const Categorized = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyCategorized {...props} />
  </Suspense>
);

export default Categorized;
