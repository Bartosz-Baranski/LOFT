import styled from "styled-components";

export const Input = styled.input`
  margin-top: 10px;
  margin-left: 9px;
  position: relative;
  top: -6px;
  left: -1px;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const Label = styled.label`
  width: 65px;
  height: 30px;
  border: 2px solid black;
  border-radius: 200px;
  background-color: ${(props) => props.theme.switch};
  box-shadow: 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }

  ::before {
    position: absolute;
    content: "";
    height: 21px;
    width: 21px;
    border-radius: 50%;
    background: linear-gradient(
      ${(props) => props.theme.switchBall1},
      ${(props) => props.theme.switchBall2}
    );
    box-shadow: 2px 1px 6px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    top: -2px;
    left: -2px;
  }

  ${Input}:checked {
    transform: translateX(31px);
    transition: 0.3s ease-in-out;
  }
`;
