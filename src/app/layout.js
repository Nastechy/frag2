import "./globals.css";
import "./fonts.css";
import TopNav from "@/pages/TopNavBar";
import FooterPage from "@/pages/FooterPage";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <TopNav />
          {children}
          <FooterPage />
        </div>
      </body>
    </html>
  );
}
