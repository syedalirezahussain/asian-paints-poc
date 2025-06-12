import Document from "@/components/icons/Document";
import Grid from "@/components/icons/Grid";
import Stack from "@/components/icons/Stack";
import Certificate from "@/components/icons/Certificate";

import HeroSlider1 from "@/assets/hero-slider-1.png";
import HeroSlider2 from "@/assets/hero-slider-2.png";
import HeroSlider3 from "@/assets/hero-slider-3.png";
import HeroSlider4 from "@/assets/hero-slider-4.png";
import HeroSlider5 from "@/assets/hero-slider-5.png";

import UtopianDreamImg from "@/assets/utopian-dream.png";
import HeroChair from "@/assets/hero-chair.png";
import FreshFinds3 from "@/assets/fresh-finds-3.png";

import ProductSlider1 from "@/assets/product-slider-1.png";
import ProductSlider2 from "@/assets/product-slider-2.png";
import ProductSlider3 from "@/assets/product-slider-3.png";
import ProductSlider4 from "@/assets/product-slider-4.png";

import SimilarProducts1 from "@/assets/similar-products-1.png";
import SimilarProducts2 from "@/assets/similar-products-2.jpg";
import SimilarProducts3 from "@/assets/similar-products-3.png";
import SimilarProducts4 from "@/assets/similar-products-4.png";
import SimilarProducts5 from "@/assets/similar-products-5.png";

export const accordionItems = [
  {
    title: "Made with Love",
    content: `Use a soft, dry, lint-free cloth or brush to dust your furniture. Frequent dusting helps protect the finish from unwanted grit and dirt build-up. 
While moving the furniture kindly do not drag it, instead pick up the furniture and move`,
  },
  {
    title: "Instructions for Care",
    content: `Use a soft, dry, lint-free cloth or brush to dust your furniture. Frequent dusting helps protect the finish from unwanted grit and dirt build-up. 
While moving the furniture kindly do not drag it, instead pick up the furniture and move`,
  },
  {
    title: "Warranty",
    content: `Use a soft, dry, lint-free cloth or brush to dust your furniture. Frequent dusting helps protect the finish from unwanted grit and dirt build-up. 
While moving the furniture kindly do not drag it, instead pick up the furniture and move`,
  },
];

export const dimensionItems = [
  {
    title: "Collection",
    content: "Utopia",
    Icon: Document,
  },
  {
    title: "Table Material",
    content: "Rattan, Cedar wood",
    Icon: Stack,
  },
  {
    title: "Country of Origin",
    content: "India",
    Icon: Certificate,
  },
  {
    title: "Category",
    content: "Dining Tables",
    Icon: Grid,
  },
];

export const heroSliderItems = [
  {
    id: 1,
    image: HeroSlider1,
    alt: "Utopian Dream",
    className: "w-full h-full object-cover",
  },
  {
    id: 2,
    image: HeroSlider2,
    alt: "Hero Chair",
    className: "w-full h-full object-cover",
  },
  {
    id: 3,
    image: HeroSlider3,
    alt: "Fresh Finds 3",
    className: "w-full h-full object-cover",
  },
  {
    id: 4,
    image: HeroSlider4,
    alt: "Fresh Finds 3",
    className: "w-full h-full object-cover",
  },
  {
    id: 5,
    image: HeroSlider5,
    alt: "Fresh Finds 3",
    className: "w-full h-full object-cover",
  },
];

export const productSliderItems = [
  {
    id: 1,
    title: "Juniper Coffee Table",
    image: ProductSlider1,
    alt: "product-slider-1.png",
    price: "12,500 INR",
    styles: {
      transform: "translateY(-16%)",
    },
  },
  {
    id: 2,
    title: "Baroque Pendant Lamp",
    image: ProductSlider2,
    alt: "product-slider-2.png",
    price: "12,500 INR",
    styles: {
      transform: "scale(1.4)",
    },
  },
  {
    id: 3,
    title: "Daisy Rug",
    image: ProductSlider3,
    alt: "product-slider-3.png",
    price: "12,500 INR",
  },
  {
    id: 4,
    title: "Louvre Tiles",
    image: ProductSlider4,
    alt: "product-slider-4.png",
    price: "12,500 INR",
  },
];

export const similarProductItems = [
  {
    id: 1,
    title: "Porto High Chair",
    price: "12,500 INR",
    image: SimilarProducts1,
  },
  {
    id: 2,
    title: "Porto High Chair",
    price: "12,500 INR",
    image: SimilarProducts2,
    styles: {
      transform: "scale(70%)",
    },
  },
  {
    id: 3,
    title: "Porto High Chair",
    price: "12,500 INR",
    image: SimilarProducts3,
    styles: {
      transform: "scale(70%)",
    },
  },
  {
    id: 4,
    title: "Porto High Chair",
    price: "12,500 INR",
    image: SimilarProducts4,
    styles: {
      transform: "",
    },
  },
  {
    id: 5,
    title: "Porto High Chair",
    price: "12,500 INR",
    image: SimilarProducts5,
    styles: {
      transform: "",
    },
  },
];
