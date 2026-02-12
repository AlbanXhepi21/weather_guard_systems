import Header from './Header';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 md:pt-20 overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
