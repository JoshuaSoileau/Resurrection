export interface HomeAttributes {
  blog_description: string;
  blog_title: string;
  blog_version: number;
  feature_description: string;
  feature_title: string;
  feature_version: number;
  features: Feature[];
  hero_description: string;
  hero_image: string;
  hero_title: string;
  hero_version: number;
  plans: Plan[];
  posts: string[];
  pricing_description: string;
  pricing_title: string;
  steps: Step[];
  steps_image: string;
  steps_version: number;
  team: Team[];
  team_description: string;
  team_title: string;
  team_version: number;
}

export interface Feature {
  description: string;
  name: string;
}
export interface Step {
  description: string;
  name: string;
}

export interface Plan {
  description: string;
  name: string;
  price: string;
  usps: { name: string }[];
}

export interface Team {
  description: string;
  image: string;
  name: string;
  position: string;
}
