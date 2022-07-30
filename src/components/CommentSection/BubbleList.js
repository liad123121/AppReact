import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { reviewSliceAction } from "../../redux/reviewSlice";

import Bubble from "./Bubble";
import { BubbleListDiv } from "../styles/Div.style";
import { NoReview } from "../styles/P.style";

const BubbleList = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviewSliceReducer.reviews);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:4000/api/review");
      dispatch(reviewSliceAction.setReviews({ reviews: res.data }));
    };
    fetch();
  }, [dispatch]);

  return (
    <BubbleListDiv>
      {reviews.length > 0 ? (
        reviews.map((bubble) => {
          return (
            <Bubble
              key={bubble._id}
              id={bubble._id}
              title={bubble.title}
              content={bubble.content}
            />
          );
        })
      ) : (
        <NoReview>No reviews added yet.</NoReview>
      )}
    </BubbleListDiv>
  );
};

export default BubbleList;
