import { Navbar, NavbarBrand } from "reactstrap";

function NavbarApp() {
  return (
    <Navbar className="" color="info" dark fixed="top" expand="true">
      <NavbarBrand href="/">
        <strong>▶️ MovieReactAPP</strong>
      </NavbarBrand>
    </Navbar>
  );
}

export default NavbarApp;
