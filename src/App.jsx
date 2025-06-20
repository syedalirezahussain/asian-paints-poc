import "./App.css";

// components
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Dimensions from "@/sections/Dimensions";
import UtopianDream from "@/sections/UtopianDream";
import SimilarProducts from "@/sections/SimilarProducts";
import FreshFinds from "@/sections/FreshFinds";
import ContactForm from "@/sections/ContactForm";
import Footer from "@/sections/Footer";
import Lenis from "@/components/Lenis";

function App() {
  return (
    <div className="wrapper w-screen max-w-[1440px] mx-auto flex flex-col justify-start items-center mb-3 md:mb-6">
      <Lenis />
      <Navbar />
      <Hero />
      <Dimensions />
      <UtopianDream />
      <SimilarProducts />
      <FreshFinds />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
