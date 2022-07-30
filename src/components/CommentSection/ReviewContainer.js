import BubbleList from "./BubbleList";
import Comment from "./Comment";
import { ReviewContainerDiv } from "../styles/Div.style";

const ReviewContainer = () => {
  return (
    <ReviewContainerDiv>
      <Comment />
      <BubbleList />
    </ReviewContainerDiv>
  );
};

export default ReviewContainer;
