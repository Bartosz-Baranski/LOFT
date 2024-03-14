import styled from "styled-components";

export const NaviContener = styled.div`
  display: flex;
  margin: 0 100px 0 320px;
`;

export const NaviList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

export const NaviElement = styled.li`
  margin: 0 10px;
`;

export const NaviLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.switchColor};
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #e2b574;
  }
`;
