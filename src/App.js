//Build a React component to display an image with a caption. The image and caption should be passed as props.

import "./styles.css";

const imageLink =
  "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
const caption = "Spring Flowers";

const ImageDisplay = ({ image, caption }) => {
  return (
    <div>
      <h1>{caption}</h1>
      <img src={image} alt="Flowers" />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <ImageDisplay image={imageLink} caption={caption} />
    </div>
  );
}
