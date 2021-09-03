import { useState } from "react";
import Globals from "./abstracts/Globals";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Downloads from "./components/Downloads";
import Faqs from "./components/Faqs";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Tag from "./components/Tag";
import MobileMenu from "./components/MobileMenu";

const App = () => {
  AOS.init({ offset: 10, duration: 1000, once: true });

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Globals />
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      <MobileMenu isActive={isActive} />
      <Hero />
      <main>
        <Features />
        <Downloads />
        <Faqs />
        <Cta />
      </main>
      <Footer />
      <Tag />
    </>
  );
};

export default App;
