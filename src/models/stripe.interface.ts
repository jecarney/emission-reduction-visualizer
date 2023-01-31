export interface StripeConfig {
  id: number;
  color: string;
  width: number;
  value: number;
  description: string;
}

export interface StripeGroup {
  stripes: StripeConfig[];
  stripeType: StripeType;
}

export type StripeType = 'emission' | 'reduction';
