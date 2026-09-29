export interface ContentPage {
  img: string;
  text: string;
}

export interface ContentItem {
  id: number;
  season: string;
  name: string;
  description: string;
  'image-01': string;
  pages: ContentPage[];
}
