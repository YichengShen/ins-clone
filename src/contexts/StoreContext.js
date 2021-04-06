import React, { createContext, useState } from "react";

import initialStore from "utils/initialStore";
import uniqueId from "utils/uniqueId.js";

// export the context so that other components can import
export const StoreContext = createContext();

function StoreContextProvider(props) {
  const [store, setStore] = useState(initialStore);

  return (
    <StoreContext.Provider
      value={{
        ...store,
        addComment,
        addLike,
        removeLike,
        addPost,
        addFollower,
        removeFollower,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );

  function addLike(postId) {
    const like = {
      userId: store.currentUserId,
      postId,
      datetime: new Date().toISOString(),
    };

    setStore({
      ...store,
      likes: store.likes.concat(like),
    });
  }

  function removeLike(postId) {
    setStore({
      ...store,
      likes: store.likes.filter(
        (like) =>
          !(like.postId === postId && like.userId === store.currentUserId)
      ),
    });
  }

  function addComment(postId, text) {
    const comment = {
      userId: store.currentUserId,
      postId,
      text,
      datetime: new Date().toISOString(),
    };
    setStore({
      ...store,
      comments: store.comments.concat(comment),
    });
  }

  function addPost(photo, desc) {
    // 1. Create a new post object (use uniqueId('post') to create an id)
    const id = uniqueId("post");
    const newPost = {
      id: id,
      userId: store.currentUserId,
      photo: photo,
      desc: desc,
      datetime: new Date().toISOString(),
    };
    // 2. Update the store
    setStore({
      ...store,
      posts: store.posts.concat(newPost),
    });
  }

  function addFollower(userId, followerId) {
    const newFollower = {
      userId: userId,
      followerId: followerId,
    };
    setStore({
      ...store,
      followers: store.followers.concat(newFollower),
    });
  }

  function removeFollower(userId, followerId) {
    setStore({
      ...store,
      followers: store.followers.filter(
        (follower) =>
          !(follower.userId === userId && follower.followerId === followerId)
      ),
    });
  }
}
export default StoreContextProvider; // export this component as default
