import "../styles/main.css";
import Script from "next/script";
import { Inter, Raleway } from "@/utils/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ProductProvider } from "../context/product";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Inter.variable} ${Raleway.variable}`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-L9RKKW4JLP" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-L9RKKW4JLP');
        `}
        </Script>
        <ProductProvider>
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </ProductProvider>
      </body>
    </html>
  );
}
