import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombre, borrarTarea, _id}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombre} <Button variant="danger" onClick={() => borrarTarea(_id)}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
