export interface IImagePost {
  id: number;
  imageUrl: string;
  caption: string | null | undefined;
  comments: Array<string>;
  publishedAt: string;
}
