import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandStatement } from "@/components/home/BrandStatement";
import { BestSellers } from "@/components/home/BestSellers";
import { SloganShowcase } from "@/components/home/SloganShowcase";
import { InstagramStrip } from "@/components/home/InstagramStrip";
import { SignupSection } from "@/components/home/SignupSection";
import { BigTypeMarquee } from "@/components/home/BigTypeMarquee";
import { GeneratorTeaser } from "@/components/home/GeneratorTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BrandStatement />
      <BestSellers />
      <GeneratorTeaser />
      <BigTypeMarquee />
      <SloganShowcase />
      <InstagramStrip />
      <SignupSection />
    </>
  );
}
