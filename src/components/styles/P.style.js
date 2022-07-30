import styled from "styled-components";

export const Title = styled.p`
  font-family: "Assistant";
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontSize};
  line-height: 16px;
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  white-space: pre-line;
`;

export const NoReview = styled.p`
  font-family: "Assistant";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(255, 255, 255, 0.5);
`;
