import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Comparison } from "./components/Comparison";
import { Specs } from "./components/Specs";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { ScrollIndicator } from "./components/ScrollIndicator";

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <Navbar />
      <ScrollIndicator />
      <main className="snap-container">
        <Hero />
        <Features />
        <HowItWorks />
        <Comparison />
        <Specs />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}

export default App;
