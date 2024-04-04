export interface IProduct {
  sku: string;
  productId: string;
  dimension: string;
  isSelected?: boolean;
}

// export interface IProduct {
//   index: string;
//   sku: string;
//   name: string;
//   pattern: {
//     name: string;
//     src: string;
//   };
//   grain: {
//     name: string;
//     src: string;
//   };
//   description: string;
//   specification: {
//     species: string;
//     dimension: string;
//     thickness: string;
//     grain: string;
//   };
//   showcase: string;
//   patternColor: string;
//   thumbnail: string;
//   images: string[];
//   isSelected?: boolean;
// }
