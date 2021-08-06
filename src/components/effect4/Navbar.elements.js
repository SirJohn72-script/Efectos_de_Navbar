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
  position: relative;
  transition: 0.5s;

  &:before {
    content: "";
    position: absolute;
    top: 10%;
    left: 12.5%;
    width: 75%;
    height: 75%;
    background: #393939;
    transition: 0.5s;
    border: 2px solid #393939;
    transition: 0.5s;
    transform: scale(0);
    opacity: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 10%;
    left: 12.5%;
    width: 75%;
    height: 75%;
    background-color: #eee;
    transition: 0.5s;
    border: 2px solid #eee;
    border-radius: 10px;
    transition: 0.5s;
    transform: scale(0);
    opacity: 0;
  }

  &:hover {
    color: #393939;
    transition: 0.5s;

    &:before {
      opacity: 1;

      transform: scale(1);
      transition: 0.5s;
      z-index: -1;
    }

    &:after {
      opacity: 1;
      transform: scale(1);
      transition: 0.4s;
      border-radius: 15px;
      z-index: -1;
    }
  }
`;
