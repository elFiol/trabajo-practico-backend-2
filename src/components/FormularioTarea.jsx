import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormularioTarea = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const SERVER_BACKEND = import.meta.env.VITE_BACKEND_SERVER

  const peticionGet = async () => {
    try {
      const response = await fetch(`${SERVER_BACKEND}/api/tareas/`)
      const data = await response.json();
      setTareas(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    peticionGet()
  }, [tareas])

  const peticionPost = async () => {
    try {
      const respuesta = await fetch(`${SERVER_BACKEND}/api/tareas/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({contenido: tarea}),
      });
    } catch (error) {
      console.log(error);
      alert("Upps! Ocurrio un error, vuelve a intentarlo mas tarde")
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    peticionPost()
    setTarea("")
  }
  const borrarTarea = async(_id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea._id !== _id)
    const response = await fetch(`${SERVER_BACKEND}/api/tarea/${_id}`, {method: "DELETE",})
    const data = await response.json()
    alert(data.mensage)
    setTareas(tareasFiltradas);
  }
  return (
    <section>
      <Form onSubmit={handlerSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Ej: Tarea 1" minLength={3} maxLength={50} onChange={(e) => setTarea(e.target.value)} value={tarea} />
          <Button variant='dark' className='ms-2' type='submit'>Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
