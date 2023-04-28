import React, { useState } from "react";
import "./ImageUploader.css";
import { useRef } from "react";

const MultiImageUploader = ({
  handleFileSelect,
  handleDelete,
  selectedFiles,
  setSelectedFiles,
  value,
}) => {
  const fileRef = useRef();
  // const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <div>
      <div>
        <label>Add Photos</label>
        <p>Upload minimum 4 to maximum 40 photos</p>
        <div className="Label-Style">
          <label htmlFor="file-upload">Select Images</label>
        </div>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          multiple
          value={value}
          className="Input-Field"
          onChange={handleFileSelect}
          ref={fileRef}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        {selectedFiles.length > 0 && (
          <div>
            <div>
              {selectedFiles
                .slice(indexOfFirstPost, indexOfLastPost)
                .map((file, index) => (
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
            <div className="Align-Selsections">
              <p>Total Images {selectedFiles.length} </p>
              <button
                onClick={() => setSelectedFiles([])}
                className="Button-Style"
              >
                Clear Selection
              </button>
              <div className="Arrow-Position">
                <button
                  onClick={() => prevPage()}
                  href="!#"
                  disabled={currentPage === 1}
                  className="Arrow-Style"
                >
                  {" "}
                  ←
                </button>
                <button
                  onClick={() => nextPage()}
                  href="!#"
                  disabled={currentPage === Math.ceil(selectedFiles.length / 5)}
                  className="Arrow-Style"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiImageUploader;
