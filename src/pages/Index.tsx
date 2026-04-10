import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import EngineCore from "@/components/EngineCore";
import Valvetrain from "@/components/Valvetrain";
import Circulation from "@/components/Circulation";
import Accessories from "@/components/Accessories";
import EngineDiagram from "@/components/EngineDiagram";
import Quiz from "@/components/Quiz";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <EngineCore />
      <Valvetrain />
      <Promo />
      <Circulation />
      <Accessories />
      <EngineDiagram />
      <Quiz />
      <Footer />
    </main>
  );
};

export default Index;