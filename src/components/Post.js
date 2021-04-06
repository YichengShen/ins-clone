import React, { useState } from "react";
import { Link } from "react-router-dom";

import publicUrl from "utils/publicUrl";
import timespan from "utils/timespan.js";

import Avatar from "./common/Avatar.js";
import Name from "./common/Name.js";

import css from "./Post.module.css";

function Post(props) {
  const [comment, setComment] = useState("");
  const [toggleComment, setToggleComment] = useState(false); // hidden initially

  return (
    <div className={css.postContainer}>
      <header className={css.postHeader}>
        <div className={css.avatarContainer}>
          <Avatar photo={props.user.photo} />
        </div>
        <Link to={"/profile/" + props.user.id} className={css.userNameLink}>
          <Name name={props.user.id} />
        </Link>
      </header>
      <article className={css.postContent}>
        <img
          className={css.postPhoto}
          src={publicUrl(props.post.photo)}
          alt="Post"
        />

        <div className={css.indent}>
          <div className={css.likeCommentIcons}>
            {props.likes.self ? (
              <img
                className={css.iconItem}
                src={publicUrl("/assets/unlike.svg")}
                alt="Unlike"
                onClick={handleUnlike}
              />
            ) : (
              <img
                className={css.iconItem}
                src={publicUrl("/assets/like.svg")}
                alt="Like"
                onClick={handleLike}
              />
            )}
            <button onClick={(e) => setToggleComment(!toggleComment)}>
              <img
                className={css.iconItem}
                src={publicUrl("/assets/comment.svg")}
                alt="Comment Action"
              />
            </button>
          </div>
          <div className={css.likeCount}>{props.likes.count} likes</div>

          <Comment user={props.post.userId} comments={props.post.desc} />

          <div>
            {props.comments.map((c, index) => {
              return <Comment user={c.userId} comments={c.text} key={index} />;
            })}
          </div>

          <div className={css.time}>
            {timespan(props.post.datetime).toUpperCase()} AGO
          </div>
        </div>
      </article>

      {toggleComment && (
        <form className={css.addComment} onSubmit={handleSubmitComment}>
          <input
            type="text"
            placeholder="Add a comment…"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>
      )}
    </div>
  );

  function handleUnlike() {
    props.onUnlike(props.post.id);
  }

  function handleLike() {
    props.onLike(props.post.id);
  }

  function handleSubmitComment(event) {
    props.onComment(props.post.id, comment); // this calls addComment from App.js
    setComment(""); //reset
    setToggleComment(false); //close comment box
    event.preventDefault(); // prevent page refresh
  }
}

function Comment(props) {
  return (
    <div className={css.commentRow}>
      <Link to={"/profile/" + props.user} className={css.userNameLink}>
        <span className={css.commentor}>{props.user} </span>
      </Link>
      <span>{props.comments}</span>
    </div>
  );
}

export default Post;
