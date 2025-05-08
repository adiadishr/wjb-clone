import "./globals.css";
import { Mail, Phone, PhoneCall } from "lucide-react";
import { geistSans, geistMono, ptSerif } from "@/lib/fonts";

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
        {/* top */}
        <div className="fixed top-0 w-full z-50">
          <div className="h-[40px] hidden md:block bg-neutral text-neutral-foreground">
            <div className="container mx-auto px-4 items-center flex h-full">
              <div className="flex items-center divide-x">
                <div className="flex items-center gap-2 pr-2 hover:underline cursor-pointer text-sm font-medium leading-none">
                  <PhoneCall size={16} />
                  020 3754 1809
                </div>
                <div className="flex items-center gap-2 pl-2 hover:underline cursor-pointer text-sm font-medium leading-none">
                  <Mail size={16} />
                  info@wjbgroundworks.com
                </div>
              </div>
            </div>
          </div>
          <nav className="h-[60px] border-b border-primary bg-white">
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
