import Globals from "./abstracts/Globals";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Downloads from "./components/Downloads";
import Faqs from "./components/Faqs";

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
      </main>
    </>
  );
};

export default App;
