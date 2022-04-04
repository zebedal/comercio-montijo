import Navigation from "Components/Navigation/Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
