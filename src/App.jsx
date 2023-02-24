// Project files
import { useState } from "react";
import { uploadImage } from "./scripts/cloudStorage";

/**
 * Learn to work with input files
 * Acepted parameters:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
 *
 * Using the file in javascript:
 * https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications
 */
export default function App() {
  // Local state
  const [image, setImage] = useState("");

  // Methods
  function onChange(event) {
    const file = event.target.files[0];
    console.log(file);

    setImage(file);
    uploadImage(file, "my-images/", "pepito.png");
  }

  return (
    <div className="App">
      <h1>Spike Cloud Storage</h1>

      <label>
        Choose a picture to upload:
        <img src={image} alt="Image preview" />
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(event) => onChange(event)}
        />
      </label>
    </div>
  );
}
