export interface Stripe {
  color: string;
  width: number;
}

export interface StripeGroup {
  stripes: Stripe[];
  stripeType: StripeType;
}

export type StripeType = "emission" | "reduction";
