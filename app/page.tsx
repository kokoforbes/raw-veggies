import ClassSection from "@/components/class-section";
import HomeSection from "@/components/home-section";
import ShopSection from "@/components/shop-section";
import ShowCase from "@/components/show-case";
import SocialsSection from "@/components/socials-section";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <HomeSection />
      <ShowCase />
      <ClassSection />
      <ShopSection />
      <SocialsSection />
    </main>
  );
}
