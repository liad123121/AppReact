import styled from "styled-components";

export const CommentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
`;

export const BubbleDiv = styled.div`
  padding: 3% 10%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px 10px 10px 2px;
  margin: 5%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const FeatureDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
`;

export const BubbleListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 15px 0px;
  gap: 5px;
`;

export const ReviewContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px 0px;
  width: 470px;
  background: linear-gradient(72.2deg, #39454c 0%, #64757e 100%);
  border-radius: 20px 0px 0px 20px;
  overflow-y: scroll;
  height: 609px;
  overflow-x: hidden;
`;

export const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModelDiv = styled.div`
    position: fixed;
    top: 20vh;
    left: 5%;
    width: 90%;
    background: ${(props) => props.background}
    padding: 16px;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.25);
    z-index: 30;

    @media (min-width: 768px){
        & {
            width: 40rem;
            left: calc(50% - 20rem);
        }
    }
`;
