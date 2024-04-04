import { Metadata } from "next";

// export const metadata = {
//   title: "Premium Timber Wood Flooring - Oak",
//   description:
//     "Our premium oak timber wood flooring will add a touch of elegance to any room in your home. Our expert team in Malaysia and Singapore can create custom solutions that fit your style and budget. Discover the benefits of our high-quality flooring and request a quote today.",
// };

// or Dynamic metadata
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: "Premium Timber Wood Flooring - Oak",
    description:
      "Our premium oak timber wood flooring will add a touch of elegance to any room in your home. Our expert team in Malaysia and Singapore can create custom solutions that fit your style and budget. Discover the benefits of our high-quality flooring and request a quote today.",
    alternates: {
      canonical: `https://www.k-floors.com/product/${params.id}`,
    },
  };
}

export default function RootLayout({ children }) {
  return <>{children}</>;
}
