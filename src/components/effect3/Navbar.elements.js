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
  overflow: hidden;

  &:before {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: calc(80% - 5px);
    width: 100%;
    height: 0.2rem;
    transform: scaleX(0);
    background-color: #9f9f9f;
    border-radius: 1px;
    transition: 0.5s;
    transform-origin: 50% 50%;
  }

  &:hover {
    color: #393939;
    transition: 0.5s;

    &:before {
      background-color: #393939;
      transform: scaleX(1);
      transition: 0.5s;
    }
  }
`;
