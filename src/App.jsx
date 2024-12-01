import DownloadTheApp from "./components/DownloadTheApp/DownloadTheApp";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <DownloadTheApp />
      <Footer />
    </div>
  );
};

export default App;
