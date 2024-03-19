import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaTareas from './ListaTareas';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const FormularioTarea = () => {
  const [tarea, setTarea] = useState('');
  const tareasLocalStorage = JSON.parse(localStorage.getItem("tareasKey")) || []
  const [tareas, setTareas] = useState(tareasLocalStorage);

  useEffect(()=>{
    console.log("aqui guardo en el localStorage")
    localStorage.setItem("tareasKey", JSON.stringify(tareas));
  },[tareas])

  const handlerSubmit = (e) => {
    e.preventDefault()
    // metemos cosas en el ARRAY
    // operador spread ...
    setTareas([...tareas, {id: tareas.length, nombre: tarea}])
    // limpiamos el formulario
    setTarea("")
  }
  const borrarTarea = (id) => {
    // tareas.splice
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id)
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
