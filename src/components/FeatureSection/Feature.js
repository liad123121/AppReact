import { useState } from "react";
import { FeatureForm } from "../styles/Form.style";
import { FeatureDiv } from "../styles/Div.style";
import FeatureButtonDiv from "./FeatureButtonDiv";
import { Title } from "../styles/P.style";
import { Button } from "../styles/Button.style";
import { Hr } from "../styles/Hr.style";
import { useSelector, useDispatch } from "react-redux";
import { reviewSliceAction } from "../../redux/reviewSlice";
import axios from "axios";

const Feature = () => {
  const [file, setFile] = useState("");
  const fileReader = new FileReader();

  const reviews = useSelector((state) => state.reviewSliceReducer.reviews);
  const dispatch = useDispatch();

  const handleOnDelete = async () => {
    await axios.delete("https://teragenserver.herokuapp.com/api/review");
    dispatch(reviewSliceAction.setReviews({ reviews: [] }));
  };

  const handleOnClick = (e) => {
    if (file) {
      fileReader.onload = (event) => {
        const csvOutput = event.target.result;
        csvFileToArray(csvOutput);
      };
    }

    fileReader.readAsText(file);
    setFile("");
  };

  const csvFileToArray = async (string) => {
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const [title, content] = i.split(",");
      let obj = {};
      obj["title"] = title;
      obj["content"] = content;
      return obj;
    });

    const res = await axios.post(
      "https://teragenserver.herokuapp.com/api/review/file",
      {
        file: array,
      }
    );
    dispatch(
      reviewSliceAction.setReviews({ reviews: [...reviews, ...res.data] })
    );
  };

  return (
    <FeatureForm onSubmit={(e) => e.preventDefault()}>
      <FeatureDiv>
        <Title color="#39454C" weight="700" fontSize="22px">
          {`${reviews.length} app reviews`}
        </Title>

        <Title color="#64757E" weight="400" fontSize="14px">
          Write the texts our accounts will use when reviewing your app on the
          App Store (Minimum 50 reviews).
        </Title>

        <FeatureButtonDiv
          setFiles={(e) => {
            setFile(e.target.files[0]);
            e.target.value = "";
          }}
        />

        <Button
          fontSize="14px"
          color="#DC2D2D"
          background="#FFFFFF"
          width="280px"
          hover="#e6e6e6"
          border="1px solid #FFDDDD"
          margin="50px 0"
          padding="0 0 0 15px"
          onClick={handleOnDelete}
        >
          Clear all reviews
        </Button>

        <Hr align="left" width="350px"></Hr>

        <Button
          width="280px"
          align="center"
          margin="15px 0 0 0"
          onClick={handleOnClick}
          disabled={!file || file.length === 0}
        >
          Save
        </Button>
      </FeatureDiv>
    </FeatureForm>
  );
};

export default Feature;
