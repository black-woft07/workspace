import { useState, useEffect } from 'react';
import './App.css';

const tareasIniciales = [
  { id: 1, texto: 'Aprender React', categoria: 'estudio', completada: false },
  { id: 2, texto: 'Hacer ejercicio', categoria: 'salud', completada: true },
  { id: 3, texto: 'Leer un libro', categoria: 'ocio', completada: false },
  { id: 4, texto: 'Practicar debugging', categoria: 'estudio', completada: false },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState('todas');
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('mensaje normal');
    console.warn('una advertencia, sale en amarillo');
    console.error('un error, sale en rojo');
    console.table([
      { nombre: 'Ana', edad: 21 },
      { nombre: 'Luis', edad: 23 },
    ]);
    console.group('Detalles de la tarea');
    console.log('id:', 1);
    console.log('texto:', 'Aprender React');
    console.groupEnd();
  }, []);

  useEffect(() => {
    console.log('Renderizando App, contador:', contador);
  }, [contador]);

  const tareasFiltradas = tareas.filter((tarea) => {
    console.log(typeof tarea.completada, tarea.completada);
    if (filtro === 'todas') return true;
    if (filtro === 'completadas') return tarea.completada === true;
    if (filtro === 'pendientes') return tarea.completada === false;
    return true;
  });

  function agregarTarea(texto) {
    if (!texto.trim()) return;

    console.log('tareas antes:', tareas.length);

    const nuevaTarea = {
      id: Date.now(),
      texto,
      categoria: 'general',
      completada: false,
    };

    setTareas((tareasActuales) => {
      const siguiente = [...tareasActuales, nuevaTarea];
      console.log('tareas después:', siguiente.length);
      return siguiente;
    });
  }

  function completarTarea(id) {
    setTareas((tareasActuales) =>
      tareasActuales.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: true } : tarea
      )
    );
  }

  return (
    <div className="app">
      <h1>Mis Tareas</h1>

      <div className="filtros">
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
        <button onClick={() => setFiltro('completadas')}>Completadas</button>
      </div>

      <ul className="lista-tareas">
        {tareasFiltradas.map((tarea) => {
          console.log(tarea);
          const categoria = tarea.categoria ?? 'general';

          return (
            <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
              <span>{tarea.texto}</span>
              <span className="categoria">{categoria.toUpperCase()}</span>
              <button onClick={() => completarTarea(tarea.id)}>✔</button>
            </li>
          );
        })}
      </ul>

      <AgregarTarea onAgregar={agregarTarea} />
      <PerfilUsuario />
    </div>
  );
}

function AgregarTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  function manejarEnvio(e) {
    e.preventDefault();
    onAgregar(texto);
    setTexto('');
  }

  return (
    <form onSubmit={manejarEnvio} className="form-agregar">
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

function PerfilUsuario() {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerUsuario();
  }, []);

  function obtenerUsuario() {
    const exito = Math.random() > 0.5;

    setTimeout(() => {
      try {
        if (exito) {
          setUsuario({ nombre: 'Estudiante React' });
          setError(null);
          return;
        }

        throw new Error('No se pudo cargar el usuario');
      } catch (err) {
        console.error(err);
        setError('No se pudo cargar el usuario');
        setUsuario(null);
      }
    }, 1000);
  }

  if (error) return <p className="perfil error">Error: {error}</p>;
  if (!usuario) return <p className="perfil">Cargando perfil...</p>;

  return <p className="perfil">Perfil: {usuario.nombre}</p>;
}

export default App;