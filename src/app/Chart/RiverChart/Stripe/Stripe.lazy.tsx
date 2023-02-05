import React, { lazy, Suspense } from 'react';

const LazyStripe = lazy(() => import('./Stripe'));

const Stripe = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyStripe {...props} />
  </Suspense>
);

export default Stripe;
