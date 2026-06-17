// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Services.jsx
//
//  INSTRUCCIONES:
//  1. Define el array "servicios" con al menos 6 servicios.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Completa el JSX usando tarjetas Bootstrap (card).
//  3. Usa .map() para renderizar — NO copies el HTML 6 veces.
//
//  PISTAS:
//  - Usa <div className="row g-4"> para el grid
//  - Cada tarjeta va en <div className="col-md-6 col-lg-4">
//  - Clases Bootstrap útiles: card, card-body, card-title, card-text
// ============================================================

// 🛠️ PASO 1: Define aquí tu array de servicios
const servicios = [
  {
    icono: '⚡',
    titulo: 'Instalaciones residenciales',
    descripcion: 'Realizamos instalaciones eléctricas completas para viviendas nuevas y remodelaciones, cumpliendo la normativa RETIE vigente.',
  },
  {
    icono: '🏭',
    titulo: 'Instalaciones comerciales e industriales',
    descripcion: 'Diseñamos y ejecutamos proyectos eléctricos para locales comerciales e industrias, garantizando eficiencia y seguridad en cada fase.',
  },
  {
    icono: '🛠️',
    titulo: 'Mantenimiento preventivo y correctivo',
    descripcion: 'Ofrecemos mantenimiento programado y reparaciones rápidas para asegurar el óptimo funcionamiento de sus sistemas eléctricos.',
  },
  {
    icono: '🔌',
    titulo: 'Tableros eléctricos y breakers',
    descripcion: 'Instalamos, reparamos y actualizamos tableros eléctricos y breakers para proteger sus circuitos y evitar fallas por sobrecarga.',
  },
  {
    icono: '💡',
    titulo: 'Iluminación LED y domótica',
    descripcion: 'Implementamos soluciones de iluminación LED y automatización para mejorar el confort, ahorro energético y control inteligente.',
  },
  {
    icono: '⚙️',
    titulo: 'Plantas eléctricas y UPS',
    descripcion: 'Instalamos y damos servicio a plantas eléctricas y sistemas UPS para garantizar energía continua ante cortes y emergencias.',
  },
  {
    icono: '🌐',
    titulo: 'Redes de voz y datos',
    descripcion: 'Diseñamos e instalamos redes de voz y datos confiables para oficinas y edificios, con conectividad estable y velocidad óptima.',
  },
  {
    icono: '🌎',
    titulo: 'Puestas a tierra',
    descripcion: 'Realizamos puestas a tierra certificadas y mantenimiento de sistemas de protección para salvaguardar personas y equipos.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            VoltTec ofrece soluciones eléctricas confiables y modernas para hogares, empresas e industrias, desde instalaciones y mantenimiento hasta automatización y energía de respaldo.
          </p>
        </div>

        {/* 🛠️ PASO 2: Renderiza las tarjetas con servicios.map(...) */}
        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div style={{ fontSize: '2.5rem' }}>{servicio.icono}</div>
                  <h5 className="card-title fw-bold mt-2">{servicio.titulo}</h5>
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;