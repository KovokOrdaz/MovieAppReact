import MyRoutes from "./routes/MyRoutes";
import NavbarApp from "./components/NavbarApp/NavbarApp";
import { Container } from "reactstrap";
import FooterApp from "./components/FooterApp/FooterApp";

function App() {
  return (
    <>
      <NavbarApp />
      <Container mt="5">
        <MyRoutes />
      </Container>
      <FooterApp />
    </>
  );
}

export default App;
