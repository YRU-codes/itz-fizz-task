import "./App.css";
import AnimatedSection from "./components/AnimatedSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="min-h-screen w-full bg-amber-200/20">
      <main id="hero-section">
        <Header />
        <HeroSection />
        <AnimatedSection />
      </main>
      {/* continue for new sections */}
{/* 
      <div className="min-h-screen w-full bg-amber-400/40">
        <h2 className="uppercase">next section</h2>
      </div> */}
    </div>
  );
}

export default App;
