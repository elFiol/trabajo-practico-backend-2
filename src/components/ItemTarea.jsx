import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombre, borrarTarea, id}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombre} <Button variant="danger" onClick={() => borrarTarea(id)}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
