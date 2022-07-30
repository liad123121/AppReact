import { useState } from "react";
import { titles, texts } from "../../generic-reviews";
import axios from "axios";
import { useDispatch } from "react-redux";
import { reviewSliceAction } from "../../redux/reviewSlice";

import { ButtonDiv } from "../styles/Div.style";
import { Button } from "../styles/Button.style";
import { FileInput } from "../styles/Input.style";
import { FileLabel } from "../styles/Label.style";
import Model from "../CommentSection/Model";

const FeatureButtonDiv = ({ setFiles }) => {
  const dispatch = useDispatch();
  const [model, setModel] = useState(false);
  const attrs = {
    _id: 1,
    title: "Learn how to add reviews",
    content:
      "You have 3 different ways to add reviews: \n\n 1. Enter a title and content in the review section on the left \n 2. Add reviews by making a CSV file and import it via the import button and then save it \n 3. Just click the generic button to get a random generic review \n\n To remove a review just click on the review and tap the X button",
  };

  const generalReview = async () => {
    const titleIndex = Math.floor(Math.random() * titles.length);
    const textIndex = Math.floor(Math.random() * texts.length);

    const res = await axios.post("http://localhost:4000/api/review", {
      title: titles[titleIndex],
      content: texts[textIndex],
    });

    dispatch(reviewSliceAction.addReview({ review: res.data }));
  };

  return (
    <ButtonDiv>
      <Button
        fontSize="14px"
        color="#64757E"
        background="#EBEFF7"
        width="280px"
        hover="#9cb0d7"
        padding="0 0 0 15px"
        onClick={() => setModel(true)}
      >
        Learn how to add reviews
      </Button>
      {model && (
        <Model
          modelRelease={() => setModel(false)}
          attrs={attrs}
          instruction={true}
        />
      )}

      <FileLabel
        fontSize="14px"
        htmlFor="file"
        color="#64757E"
        background="#EBEFF7"
        width="265px"
        hover="#9cb0d7"
        padding="0px 0 0 15px"
      ></FileLabel>
      <FileInput type="file" id="file" accept=".csv" onChange={setFiles} />

      <Button
        fontSize="14px"
        color="#64757E"
        background="#EBEFF7"
        width="280px"
        hover="#9cb0d7"
        padding="0 0 0 15px"
        onClick={generalReview}
      >
        +10 generic reviews
      </Button>
    </ButtonDiv>
  );
};

export default FeatureButtonDiv;
