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
  /* overflow: hidden; */

  &:before {
    position: absolute;
    width: 20px;
    height: 20px;
    content: "";
    background-color: #144294;
    left: calc(50% - 10px);
    top: calc(50% - 10px);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: 0.4s;
  }

  &:after {
    position: absolute;
    width: 20px;
    height: 20px;
    content: "";
    background-color: #4f8bf5;
    left: calc(50% - 10px);
    top: calc(50% - 10px);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: 0.8s;
  }

  &:hover {
    color: #eee;
    transition: 0.5s;

    &:before {
      opacity: 1;
      transform: scale(15);
      transition: 0.4s;
    }

    &:after {
      opacity: 1;
      transform: scale(15);
      transition: 0.8s;
    }
  }
`;
