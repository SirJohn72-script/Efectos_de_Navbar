import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #eee;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: auto;
`;

export const Menu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const MenuItem = styled.li`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItemLink = styled.a`
  font-family: sans-serif;
  font-size: 1.2em;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #9f9f9f;
  z-index: 99;

  &:after {
    content: "";
    position: absolute;
    left: 12.5%;
    top: 12.5%;
    width: 75%;
    height: 75%;
    border-left: 2px solid #eee;
    border-right: 2px solid #eee;
    transform: scaleX(2);
    opacity: 0;
    transition: 0.3s;
    z-index: -1;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #393939;
    transform: scaleX(0);
    transition: 0.5s;
    opacity: 0;
    z-index: -1;
  }

  &:hover {
    color: #eee;
    transition: 0.3s;

    &:after {
      transform: scaleX(1);
      opacity: 1;
      transition: 0.4s;
    }

    &:before {
      opacity: 1;
      transform: scaleX(1);
      transition: 0.5s;
    }
  }
`;
