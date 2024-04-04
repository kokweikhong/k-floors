export interface IProductCategory {
  index: string;
  productId: string;
  name: string;
  description: string;
  species: string;
  thickness: string;
  grain: string;
  pdfShowcase: string;
  patternColor: string;
  image: {
    thumbnail: string;
    filenames: string[];
    grain: {
      name: string;
      src: string;
    };
    pattern: {
      name: string;
      src: string;
    };
  };
  isSelected?: boolean;
  category: "KL" | "K";
}
