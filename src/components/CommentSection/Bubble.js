import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { reviewSliceAction } from "../../redux/reviewSlice";

import { BubbleDiv } from "../styles/Div.style";
import { Title } from "../styles/P.style";
import { Span } from "../styles/Span.style";
import Model from "./Model";

const Bubble = ({ title, content, id, ismodel, instruction }) => {
  const [x, setX] = useState(false);
  const [model, setModel] = useState(false);
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviewSliceReducer.reviews);
  let getModel = false;

  const handleOnClick = async () => {
    await axios.delete(`https://teragenserver.herokuapp.com/api/review/${id}`);
    const filter = reviews.filter((review) => {
      return review._id !== id;
    });
    dispatch(reviewSliceAction.setReviews({ reviews: filter }));
  };

  const modelInsert = () => {
    if (!getModel) {
      setModel(true);
    }
    getModel = false;
  };

  const modelRelease = () => {
    getModel = true;
    setModel(false);
  };

  return (
    <BubbleDiv
      onMouseEnter={() => {
        setX(true);
      }}
      onMouseLeave={() => {
        setX(false);
      }}
      onClick={!ismodel ? modelInsert : undefined}
    >
      <Title
        fontSize="12px"
        weight="700"
        color="#FFFFFF"
        margin="12px 0 0 0"
        className="title"
      >
        {title}
      </Title>
      <Title
        weight="400"
        color="rgba(255, 255, 255, 0.5)"
        className="content"
        fontSize="12px"
        margin="2px 0 12px 0"
      >
        {!ismodel ? `${content.slice(0, 50)}...` : content}
      </Title>
      {x && ismodel && !instruction && <Span onClick={handleOnClick}></Span>}
      {model && <Model id={id} modelRelease={modelRelease} />}
    </BubbleDiv>
  );
};

export default Bubble;
