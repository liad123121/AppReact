import { useSelector } from "react-redux";

import { ModelDiv, BackdropDiv } from "../styles/Div.style";
import Bubble from "./Bubble";

const Model = ({ id, modelRelease, attrs, instruction }) => {
  const review = useSelector((state) => state.reviewSliceReducer.reviews);
  const { title, content, _id } = !attrs
    ? review.filter((review) => {
        return review._id === id;
      })[0]
    : attrs;

  return (
    <div>
      <BackdropDiv onClick={modelRelease} />
      <ModelDiv background="linear-gradient(72.2deg, #39454c 0%, #64757e 100%);">
        <Bubble
          title={title}
          content={content}
          id={_id}
          ismodel={true}
          instruction={instruction}
        />
      </ModelDiv>
    </div>
  );
};

export default Model;
