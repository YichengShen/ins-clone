import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import css from "./NewPost.module.css";
import FileLoader from "./FileLoader.js";
import { StoreContext } from "contexts/StoreContext";

function NewPost() {
  let { addPost } = useContext(StoreContext);

  const [dragging, setDragging] = useState(false); // to show a dragging effect
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(""); // to show an error message

  const history = useHistory();

  function handleFileDragEnter(e) {
    setDragging(true);
  }

  function handleFileDragLeave(e) {
    setDragging(false);
  }

  function handleFileDrop(e) {
    if (e.dataTransfer.types.includes("Files") === false) {
      return;
    }

    if (e.dataTransfer.files.length >= 1) {
      let file = e.dataTransfer.files[0];
      if (file.size > 1000000) {
        // larger than 1 MB
        setError("Upload failed. Image cannot be larger than 1MB.");
        return;
      }
      if (file.type.match(/image.*/)) {
        let reader = new FileReader();
        reader.onloadend = (e) => {
          // call setPhoto with e.target.result (this is a Base64 image string)
          setPhoto(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        setError("Upload failed. The file is not an image.");
      }
    }
    setDragging(false);
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handleSubmit(e) {
    // 1. Prevent default behavior
    // 2. Show error msg if failed and exit
    // 3. Call the storage update function passed from the parent
    // 3. Clear error msg
    e.preventDefault();
    if (error !== "") {
      alert(error);
      setError("");
      return;
    }
    if (photo !== null) {
      try {
        addPost(photo, desc);
        history.push("/");
      } catch (err) {
        alert(err.message);
      }
    } else {
      return;
    }
  }

  function handleCancel() {
    history.push("/");
  }

  return (
    <div>
      <div className={css.photo}>
        {!photo ? (
          <div className={css.message}>Drop your image</div>
        ) : (
          <img src={photo} alt="New Post" />
        )}
        <FileLoader
          onDragEnter={handleFileDragEnter}
          onDragLeave={handleFileDragLeave}
          onDrop={handleFileDrop}
        >
          <div
            className={[css.dropArea, dragging ? css.dragging : null].join(" ")}
          ></div>
        </FileLoader>
      </div>

      <div className={css.desc}>
        <textarea
          rows="3"
          placeholder="Describe..."
          onChange={handleDescChange}
        ></textarea>
      </div>

      {/* if Error */}
      {error !== "" && <div className={css.error}>Error: {error}</div>}

      <div className={css.actions}>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSubmit}>Share</button>
      </div>
    </div>
  );
}

export default NewPost;
