import Globals from "./abstracts/Globals";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Downloads from "./components/Downloads";
import Faqs from "./components/Faqs";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Globals />
      <Navbar />
      <Hero />
      <main>
        <Features />
        <Downloads />
        <Faqs />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export default App;
