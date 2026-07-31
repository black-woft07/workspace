import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    edad: '',
    fechaNacimiento: '',
    experiencia: 5,
    aceptaTerminos: false,
    lenguajes: [],
    modalidad: 'presencial',
    pais: '',
    comentarios: '',
    foto: null,
    colorFavorito: '#000000',
  })

  const [submittedData, setSubmittedData] = useState(null)

  const languages = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby']

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    if (name === 'aceptaTerminos') {
      setFormData((prev) => ({ ...prev, aceptaTerminos: checked }))
      return
    }

    if (name === 'lenguajes') {
      const language = value
      setFormData((prev) => {
        const hasLanguage = prev.lenguajes.includes(language)
        const nextLanguages = hasLanguage
          ? prev.lenguajes.filter((item) => item !== language)
          : [...prev.lenguajes, language]
        return { ...prev, lenguajes: nextLanguages }
      })
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }))
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] ?? null
    setFormData((prev) => ({ ...prev, foto: file }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedData({ ...formData, foto: formData.foto?.name || 'No se subió archivo' })
  }

  return (
    <main className="student-form-page">
      <section className="student-form">
        <h1>Registro de estudiante</h1>
        <form onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. María Pérez"
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              name="correo"
              type="email"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Ej. maria@ejemplo.com"
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              id="contraseña"
              name="contraseña"
              type="password"
              value={formData.contraseña}
              onChange={handleChange}
              placeholder="Ingresa una contraseña segura"
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="edad">Edad</label>
            <input
              id="edad"
              name="edad"
              type="number"
              min="10"
              max="120"
              value={formData.edad}
              onChange={handleChange}
              placeholder="Ej. 22"
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
            <input
              id="fechaNacimiento"
              name="fechaNacimiento"
              type="date"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group range-group">
            <label htmlFor="experiencia">Nivel de experiencia: {formData.experiencia}</label>
            <input
              id="experiencia"
              name="experiencia"
              type="range"
              min="1"
              max="10"
              value={formData.experiencia}
              onChange={handleChange}
            />
          </div>

          <fieldset className="choice-group">
            <legend>Lenguajes que conoces</legend>
            {languages.map((language) => (
              <label key={language} className="checkbox-inline">
                <input
                  type="checkbox"
                  name="lenguajes"
                  value={language}
                  checked={formData.lenguajes.includes(language)}
                  onChange={handleChange}
                />
                {language}
              </label>
            ))}
          </fieldset>

          <fieldset className="choice-group">
            <legend>Modalidad</legend>
            <label className="radio-inline">
              <input
                type="radio"
                name="modalidad"
                value="presencial"
                checked={formData.modalidad === 'presencial'}
                onChange={handleChange}
              />
              Presencial
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="modalidad"
                value="virtual"
                checked={formData.modalidad === 'virtual'}
                onChange={handleChange}
              />
              Virtual
            </label>
          </fieldset>

          <div className="field-group">
            <label htmlFor="pais">País</label>
            <select
              id="pais"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un país</option>
              <option value="Argentina">Argentina</option>
              <option value="Chile">Chile</option>
              <option value="España">España</option>
              <option value="México">México</option>
              <option value="Perú">Perú</option>
              <option value="Colombia">Colombia</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="comentarios">Comentarios</label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              placeholder="Cuéntanos más sobre ti"
              rows="4"
            />
          </div>

          <div className="field-group">
            <label htmlFor="foto">Foto de perfil</label>
            <input
              id="foto"
              name="foto"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="field-group">
            <label htmlFor="colorFavorito">Color favorito</label>
            <input
              id="colorFavorito"
              name="colorFavorito"
              type="color"
              value={formData.colorFavorito}
              onChange={handleChange}
            />
          </div>

          <div className="field-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="aceptaTerminos"
                checked={formData.aceptaTerminos}
                onChange={handleChange}
              />
              Acepto los términos y condiciones
            </label>
          </div>

          <button type="submit">Enviar</button>
        </form>

        {submittedData && (
          <section className="summary">
            <h2>Datos enviados</h2>
            <ul>
              <li>Nombre: {submittedData.nombre}</li>
              <li>Correo: {submittedData.correo}</li>
              <li>Edad: {submittedData.edad}</li>
              <li>Fecha de nacimiento: {submittedData.fechaNacimiento}</li>
              <li>Experiencia: {submittedData.experiencia}</li>
              <li>Modalidad: {submittedData.modalidad}</li>
              <li>País: {submittedData.pais}</li>
              <li>Lenguajes: {submittedData.lenguajes.join(', ') || 'Ninguno'}</li>
              <li>Color favorito: {submittedData.colorFavorito}</li>
              <li>Foto: {submittedData.foto}</li>
              <li>Términos aceptados: {submittedData.aceptaTerminos ? 'Sí' : 'No'}</li>
            </ul>
          </section>
        )}
      </section>
    </main>
  )
}

export default App
