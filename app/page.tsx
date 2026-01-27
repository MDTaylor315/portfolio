// app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import FromIdeasToReality from '@/components/FromIdeasToReality';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>
      {/* Sección blanca para AboutMe y Experience */}
      <section id="sobre-mi" className="bg-[#F0EEF8] relative z-0 pt-20">
        <AboutMe />
      </section>
      
      {/* Sección de Experiencia - Directamente después de AboutMe */}
      <section id="experiencia" className="bg-[#F0EEF8] relative z-0">
        <Experience />
      </section>

      {/* Contenedor blanco para Projects y FromIdeasToReality */}
      <section id="proyectos" className="bg-[#F0EEF8]">
        {/* Sección de Proyectos */}
        <Projects />

        {/* FromIdeasToReality */}
        <FromIdeasToReality />
      </section>

      {/* Footer con su propio fondo */}
      <section id="contacto">
        <Footer />
      </section>
    </main>
  );
}