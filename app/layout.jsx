import "@/assets/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Pulse | Find the perfect rental",
  description:
    "Property Pulse is a real estate website that helps you find the perfect home.",
  keywords:
    "real estate, rental, home, apartment, house, property, property pulse",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>;
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
