export interface IBlogPost {
  id: number;
  title: string | null | undefined;
  description: string | undefined | null;
  viewCount: number;
  publishedAt: string;
}
