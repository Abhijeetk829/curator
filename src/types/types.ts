export interface Tab {
  id: string;
  title: string;
}

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
  badge?: string;
  isBestseller?: boolean;
  userReviews?: number;
}
