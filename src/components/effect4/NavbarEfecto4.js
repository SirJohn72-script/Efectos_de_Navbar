import React from "react";
import {
  Container,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
} from "./Navbar.elements";

const NavbarEffect4 = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Menu>
            <MenuItem>
              <MenuItemLink bgColor={"#ff0000"}>Home</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink bgColor={"#00ff00"}>About me</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink bgColor={"#fa0ff0"}>Portfolio</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink bgColor={"#ffff00"}>Contact Me</MenuItemLink>
            </MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </>
  );
};

export default NavbarEffect4;
