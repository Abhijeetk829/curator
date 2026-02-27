import { BadgeType } from "./BadgeType";

export interface Product {
  id: string;
  tabs: string[];
  name: string;
  description: string;
  price: number;
  image: string;
  amazonLink: string;
  pinterestLink?: string;
  rating?: number;
  badge?: BadgeType;
  userReviews?: number;
  tags?: string[];
}
