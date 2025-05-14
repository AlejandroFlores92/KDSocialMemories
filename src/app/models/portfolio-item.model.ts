export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  type: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl?: string;
  category: string;
}
