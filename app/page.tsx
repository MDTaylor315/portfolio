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
      <Hero />
      {/* Sección blanca para AboutMe y Experience */}
      <section className="bg-[#F0EEF8] relative z-0 pt-20">
        <AboutMe />
        {/* Sección de Experiencia - Directamente después de AboutMe */}
        <Experience />
      </section>

      {/* Contenedor blanco para Projects y FromIdeasToReality */}
      <div className="bg-[#F0EEF8]" >
        {/* Sección de Proyectos */}
        <Projects />

        {/* FromIdeasToReality */}
        <FromIdeasToReality />
      </div>

      {/* Footer con su propio fondo */}
      <Footer />
    </main>
  );
}