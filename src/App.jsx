import {Navbar} from "@/layout/Navbar";
import {Home} from "@/sections/Home";
import {About} from "@/sections/About";
import {Experience} from "@/sections/Experience";
import {Projects} from "@/sections/Projects";
import {Contact} from "@/sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App
