import "./globals.css";
import { geistSans, geistMono, ptSerif } from "@/lib/fonts";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata = {
  title: "WJB Ground Works",
  description: "Looking for groundworks near NW2 London? We offer expert excavation, foundations & drainage within 25 miles. Quality civil engineering services.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ptSerif.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
