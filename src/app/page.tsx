
import Navbar from "@/app/Navbar/page"
import HeroTwo from "@/app/HeroTwo/page"
import Paralax from "@/app/Paralax/page"
/* import Study from "@/app/study-destinations/layout" */
import ServiceStack from "@/app/serviceStack/page"
import Footer1 from "@/app/Footer1/page"
import Study from "@/app/study/page"


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroTwo />
      <Paralax />
      <Study />
      <ServiceStack />

      <Footer1 />
    </>
  );
}
