import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Paralax from "./components/Paralax/Paralax";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Cursor/>
      <section className="h-screen snap-center" id="Homepage"><Navbar/>
      <Hero/>
      </section>
      <section className="h-screen snap-center" id="Skills"><Paralax type="Skills"/></section>
      <section className="h-screen snap-center" id="Skills"><Skills/></section>
      <section className="h-screen snap-center" id="Projects"><Paralax type="Projects"/></section>
      {/* <section className="h-screen snap-center" id="Projects">3</section> */}
      <Projects/>
      <section className="h-screen snap-center" id="Contact"><Contact/></section>
      <section className="snap-center" id="About"><About/></section>
    </div>
    // <Test/>
  )
}
