import React from "react";
import {
  Container,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
} from "./Navbar.elements";

const Navbar = () => {
  return (
    <>
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
              <MenuItemLink>Portfolio</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>Contact Me</MenuItemLink>
            </MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
