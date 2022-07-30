import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { CommentForm } from "../styles/Form.style";
import { reviewSliceAction } from "../../redux/reviewSlice";
import { CommentDiv } from "../styles/Div.style";
import { CommentInput } from "../styles/Input.style";
import { Title } from "../styles/P.style";
import { Hr } from "../styles/Hr.style";
import { Button } from "../styles/Button.style";

const Comment = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "https://teragenserver.herokuapp.com/api/review",
      {
        title,
        content,
      }
    );
    dispatch(reviewSliceAction.addReview({ review: res.data }));
    setContent("");
    setTitle("");
  };

  return (
    <CommentForm onSubmit={handleOnSubmit}>
      <CommentDiv>
        <CommentInput
          placeholder="Enter review title"
          maxLength="255"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></CommentInput>
        <Title fontSize="16px" color="#64757E">{`${title.length}/255`}</Title>
      </CommentDiv>

      <Hr></Hr>

      <CommentDiv>
        <CommentInput
          placeholder="Write your review test..."
          onChange={(e) => setContent(e.target.value)}
          value={content}
          weight="400"
        ></CommentInput>
        <Button
          disabled={title.length === 0 || content.length === 0}
          align="center"
        >
          Add
        </Button>
      </CommentDiv>
    </CommentForm>
  );
};

export default Comment;
