import "./App.css";

// components
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Dimensions from "@/sections/Dimensions";
import UtopianDream from "@/sections/UtopianDream";
import SimilarProducts from "@/sections/SimilarProducts";
import FreshFinds from "@/sections/FreshFinds";
import ContactForm from "@/sections/ContactForm";

function App() {
  return (
    <div className="w-screen max-w-[1440px] mx-auto flex flex-col justify-start items-center mb-[200px]">
      <Navbar />
      <Hero />
      <Dimensions />
      <UtopianDream />
      <SimilarProducts />
      <FreshFinds />
      <ContactForm />
    </div>
  );
}

export default App;
