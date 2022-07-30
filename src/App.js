import Feature from "./components/FeatureSection/Feature";
import ReviewContainer from "./components/CommentSection/ReviewContainer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container" id="app-container">
      <ReviewContainer />
      <Feature />
    </div>
  );
};

export default App;
