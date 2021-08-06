import React from "react";
import {
  Container,
  Menu,
  MenuItem,
  Wrapper,
  MenuItemLink,
} from "./Navbar.elements";

const NavbarEfecto2 = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <MenuItem>
            <MenuItemLink>Home</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>About me</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>Portofolio</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>Contact me</MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default NavbarEfecto2;
