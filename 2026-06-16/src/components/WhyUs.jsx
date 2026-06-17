// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  WhyUs.jsx  (¿Por qué elegirnos?)
//
//  INSTRUCCIONES:
//  1. Define el array "razones" con al menos 4 objetos.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Agrega una imagen en la columna izquierda.
//  3. Escribe 2 párrafos sobre la empresa.
//  4. Usa .map() para renderizar la lista de razones.
//
//  PISTAS:
//  - <div className="row align-items-center"> para las columnas
//  - className="list-unstyled" en <ul> quita los bullets
//  - Placeholder: https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec
// ============================================================

// 🛠️ PASO 1: Define tu array de razones
const razones = [
  {
    icono: '🏆',
    titulo: 'Técnicos certificados',
    descripcion: 'Todo nuestro personal cuenta con certificación RETIE y se actualiza constantemente.',
  },
  {
    icono: '🛡️',
    titulo: 'Garantía de 1 año',
    descripcion: 'Ofrecemos garantía de un año en mano de obra para que tu instalación esté protegida.',
  },
  {
    icono: '⚡',
    titulo: 'Respuesta en menos de 24 horas',
    descripcion: 'Atendemos tus solicitudes rápidamente para minimizar el tiempo de espera y restablecer el servicio.',
  },
  {
    icono: '🔧',
    titulo: 'Materiales de primera calidad',
    descripcion: 'Trabajamos con insumos certificados y de alta durabilidad para asegurar instalaciones seguras.',
  },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Columna izquierda: imagen */}
          <div className="col-lg-5">
            <img
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec"
              alt="Técnicos de VoltTec trabajando"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Columna derecha: texto y razones */}
          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>

            <p className="text-muted mb-3">
              VoltTec lleva más de 10 años en el mercado ofreciendo servicios eléctricos confiables y personalizados. Nuestra experiencia nos permite atender obras residenciales, comerciales e industriales con altos estándares de calidad.
            </p>
            <p className="text-muted mb-4">
              Operamos en las principales ciudades del país y damos servicio tanto a hogares como a empresas y establecimientos industriales. Nuestro enfoque es brindar soluciones seguras, rápidas y adaptadas a cada tipo de cliente.
            </p>

            {/* 🛠️ PASO 2: Renderiza las razones con .map() */}
            <ul className="list-unstyled">
              {razones.map((razon, index) => (
                <li key={index} className="d-flex gap-3 mb-3">
                  <span style={{ fontSize: '1.5rem' }}>{razon.icono}</span>
                  <div>
                    <strong>{razon.titulo}</strong>
                    <p className="text-muted mb-0 small">{razon.descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;