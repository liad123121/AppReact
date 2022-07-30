import styled from "styled-components";

export const Span = styled.span`
  position: absolute;
  left: 96%;
  right: 0%;
  top: 5%;
  bottom: 0%;
  width: 14px;
  height: 14px;
  background: #dc2d2d;
  border-radius: 100px;
  color: #fff;
  text-align: center;
  transition: all 0.15s;

  &:hover {
    background: #711212;
  }
  &::after {
    position: absolute;
    content: "×";
    right: 2.3px;
    top: -2px;
  }
`;
