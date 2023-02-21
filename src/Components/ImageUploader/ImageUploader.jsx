import React, { useState } from "react";
import "./ImageUploader.css";

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    if (files.length < 4 || files.length > 50) {
      alert("Please select between 4 and 50 photos.");
      setSelectedFiles([]);
      return;
    } else {
      setSelectedFiles([...selectedFiles, ...files]);
    }
  };

  const handleDelete = (index) => {
    const files = [...selectedFiles];
    files.splice(index, 1);
    setSelectedFiles(files);
  };

  return (
    <div>
      <div>
        <label
          htmlFor="file-upload"
          className="Label-Style"
          //   style={{
          //     backgroundColor: "#337ab7",
          //     color: "#fff",
          //     padding: "10px",
          //     borderRadius: "4px",
          //     cursor: "pointer",
          //   }}
        >
          Choose images
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          multiple
          className="Input-Field"
          //   style={{ display: "none" }}
          onChange={handleFileSelect}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        {selectedFiles.length > 0 && (
          <div>
            <button
              onClick={() => setSelectedFiles([])}
              className="Button-Style"
              //   style={{
              //     backgroundColor: "red",
              //     color: "#fff",
              //     padding: "10px",
              //     borderRadius: "4px",
              //     cursor: "pointer",
              //     marginBottom: "10px",
              //   }}
            >
              Clear Selection
            </button>
            {/* {selectedFiles.length >= 4 && selectedFiles.length <= 50 && (
              <div
                style={{
                  backgroundColor: "orange",
                  height: "10px",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    height: "100%",
                    width: `${(selectedFiles.length / 50) * 100}%`,
                    borderRadius: "4px",
                  }}
                ></div>
              </div>
            )} */}
            <div>
              {selectedFiles.map((file, index) => (
                <div
                  key={index}
                  className="Preview-Images"
                  //   style={{
                  //     display: "inline-block",
                  //     margin: "5px",
                  //     position: "relative",
                  //   }}
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="Image-Size"
                    // style={{ width: "150px", height: "150px" }}
                  />
                  <div
                    className="Button-Position"
                    // style={{ position: "absolute", top: 0, right: 0 }}
                  >
                    <button onClick={() => handleDelete(index)}>X</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
