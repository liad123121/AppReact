import styled from "styled-components";

export const FileLabel = styled.label`
  width: ${(props) => props.width || "64px"};
  height: 45px;
  background: ${(props) => props.background || "#ff206f"};
  border-radius: 10px;
  font-family: "Assistant";
  font-weight: ${(props) => props.weight || "700"};
  text-align: ${(props) => props.align || "left"};
  color: ${(props) => props.color || "#fff"};
  margin: ${(props) => props.margin || "5px 0 0 0"};
  padding: ${(props) => props.padding};
  font-size: 15px;
  border: ${(props) => props.border || "none"};
  transition: all 0.15s;
  display: block;
  position: relative;

  &:hover {
    background: ${(props) => props.hover || "#8f0032"};
  }

  &::after {
    content: "Import from file";
    position: absolute;
    top: 25%;
    left: 5%;
  }
`;
