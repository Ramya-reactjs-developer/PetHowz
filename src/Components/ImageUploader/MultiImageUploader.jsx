import React, { useState } from "react";
import "./ImageUploader.css";

const MultiImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

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
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);

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
              <p>Total Images Selected {selectedFiles.length} </p>
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
