import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";

function App() {
  return (
    <>
      <Container className="my-4 mainPage">
        <h1 className="text-center">Lista de tareas</h1>
        <FormularioTarea></FormularioTarea>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
