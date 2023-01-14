export interface Stripe {
  color: string;
  width: number;
  value: number;
  description: string;
}

export interface StripeGroup {
  stripes: Stripe[];
  stripeType: StripeType;
}

export type StripeType = "emission" | "reduction";
