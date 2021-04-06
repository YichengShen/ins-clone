import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { StoreContext } from "contexts/StoreContext";

import css from "./Home.module.css";

import Post from "./Post.js";

function Home() {
  let {
    posts,
    users,
    comments,
    likes,
    currentUserId,
    addComment,
    addLike,
    removeLike,
  } = useContext(StoreContext);

  let { postId } = useParams(); // the variable name has to match the parameter name

  return (
    <div className={css.container}>
      {posts
        .filter((post) =>
          typeof postId !== "undefined" ? post.id === postId : true
        )
        .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
        .map((post) => (
          <Post
            key={post.id}
            user={findUser(post, users)}
            post={post}
            comments={findComments(post, comments)}
            likes={findLikes(post, likes, currentUserId)}
            onLike={addLike}
            onUnlike={removeLike}
            onComment={addComment}
          />
        ))}
    </div>
  );
}

function findUser(post, users) {
  return users.find((user) => user.id === post.userId);
}

function findComments(post, comments) {
  return comments.filter((comment) => comment.postId === post.id);
}

function findLikes(post, likes, currentUserId) {
  let postLikes = likes.filter((like) => like.postId === post.id);
  return {
    self: postLikes.some((like) => like.userId === currentUserId),
    count: postLikes.length,
  };
}

export default Home;
