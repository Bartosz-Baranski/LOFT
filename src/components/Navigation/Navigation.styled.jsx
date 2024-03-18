import styled from "styled-components";

export const NaviContener = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const NaviList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 12px;
  justify-content: space-around;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    font-size: 34px;
  }
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
