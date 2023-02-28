import React, { useState } from "react";
import "./ImageUploader.css";

const SingleImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    if (files.length === 1) {
      if (selectedFiles.length > 0) {
        setSelectedFiles([...files]);
      } else {
        setSelectedFiles([...selectedFiles, ...files]);
      }
    } else {
      // Show an error message to the user
      alert("Please select only one file.");
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
        <div className="Label-Style">
          <label htmlFor="file-upload">Choose Images</label>
        </div>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          multiple
          className="Input-Field"
          onChange={handleFileSelect}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        {selectedFiles.length > 0 && (
          <div>
            <div>
              {selectedFiles.map((file, index) => (
                <div key={index} className="Preview-Images">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="Image-Size"
                  />
                  <div className="Button-Position">
                    <button
                      className="Delete-Button-Style"
                      onClick={() => handleDelete(index)}
                    >
                      X
                    </button>
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

export default SingleImageUploader;
