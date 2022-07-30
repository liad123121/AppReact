import styled from "styled-components";

export const CommentInput = styled.input`
  font-family: "Assistant";
  font-style: normal;
  font-weight: ${(props) => props.weight || "700"};
  font-size: 18px;
  line-height: 18px;
  border: none;
  color: ${(props) => props.color};
  width: 370px;

  &:active,
  &:focus {
    outline: none;
  }
`;

export const FileInput = styled.input`
  visibillity: hidden;
  display: none;
`;
