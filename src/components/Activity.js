import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import PostThumbnail from "./common/PostThumbnail.js";

import css from "./Activity.module.css";
import { StoreContext } from "contexts/StoreContext";

function Activity(props) {
  let { posts, likes, currentUserId } = useContext(StoreContext);

  const [searchInput, setSearchInput] = useState("");

  const myLikes = likes.filter((like) => like.userId === currentUserId);
  const likedPosts = posts.filter((post) =>
    myLikes.some((l) => l.postId === post.id)
  );

  return (
    <div>
      <div className={css.activityHeader}>
        Liked Posts
        <br />
        <input
          className={css.search}
          onChange={handleSearch}
          placeholder={"Search with user id..."}
        />
      </div>

      <div className={css.posts}>
        {likedPosts
          .filter((post) =>
            searchInput !== ""
              ? post.userId.includes(searchInput.toLowerCase())
              : true
          )
          .map((p) => {
            return (
              <Link key={p.id} to={"/" + p.id}>
                <PostThumbnail key={p.id} post={p} />
              </Link>
            );
          })}
      </div>
    </div>
  );

  function handleSearch(e) {
    setSearchInput(e.target.value);
  }
}

export default Activity;
