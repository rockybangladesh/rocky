export interface PricingPlan {
  title: string;
  price: number;
  description: string;
  features?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}