import { BadgeType } from "./BadgeType";

export interface Product {
  id: string;
  tab: string;
  name: string;
  description: string;
  price: string;
  image: string;
  imageSize: "small" | "medium" | "large";
  amazonLink: string;
  pinterestPin?: string;
  rating?: number;
  badge?: BadgeType;
  userReviews?: number;
  tags?: string[];
}
