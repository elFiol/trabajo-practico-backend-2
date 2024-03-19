import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas , borrarTarea}) => {
  return (
    <ListGroup>
      {
        tareas.map((tarea, posicion) => <ItemTarea key={posicion} nombre={tarea.nombre} id={tarea.id} borrarTarea={borrarTarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
