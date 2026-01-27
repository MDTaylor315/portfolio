// components/SectionBackground.tsx
export default function Background() {
  return (
    /* El Background ahora no necesita rounded-b porque el clip-path del Hero lo recorta */
    <div className="absolute inset-0 z-0 overflow-hidden bg-black w-full h-full">

      {/* 1. Imagen de Granulado */}
      <div
        className="absolute inset-0 bg-[url('/img/Background-Hero.png')] bg-cover bg-center opacity-90"
        style={{ backgroundSize: '100% auto' }}
      ></div>

      {/* 2. Cuadrícula Cuadrada Fija */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
        style={{ backgroundSize: '60px 60px' }}
      ></div>

      {/* 3. Viñeta/Luz central (reducida) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]"></div>
    </div>
  );
}