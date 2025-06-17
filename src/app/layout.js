import "./globals.css";
import { sans } from "@/lib/fonts";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";
import { LenisComponent } from "@/hooks/lenis";
import UseAOS from "@/hooks/use-aos";
import PageClient from "@/components/page-client";

export const metadata = {
  title: "WJB Ground Works",
  description: "Looking for groundworks near NW2 London? We offer expert excavation, foundations & drainage within 25 miles. Quality civil engineering services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} antialiased`}
      >
        <LenisComponent />
        <UseAOS />
        <PageClient>
          <Nav />
          {children}
          <Footer />
        </PageClient>
      </body>
    </html>
  );
}
