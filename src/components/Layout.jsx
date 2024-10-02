import { Header, Footer } from ".";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
