import "./globals.css";
import "./fonts.css";
import TopNav from "@/pages/TopNavBar";
import FooterPage from "@/pages/FooterPage";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: 'url("/images/bg-box.jpg")',
          backgroundSize: "35%",
          backgroundPosition: "center",
          height: "100%",
        }}
      >

        <div>
          <TopNav />
          {children}
          <FooterPage />
        </div>
      </body>
    </html>
  );
}
