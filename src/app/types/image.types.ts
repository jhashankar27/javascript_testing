export interface TempleImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

export interface ImageData {
  templeImages: TempleImage[];
  eventImages: TempleImage[];
}