import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Header.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Explore from './Explore.js';
import NewPost from './NewPost.js';
import Activity from './Activity.js';
import Profile from './Profile.js';

import initialStore from 'utils/initialStore';
import uniqueId from 'utils/uniqueId.js';

import css from './App.module.css';

function App() {
  const [store, setStore] = useState(initialStore);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={css.container}>
        <Header/>
        <main className={css.content}>
        <Switch>
          <Route path="/explore">
            <Explore
              store={store}/>
          </Route>
          <Route path="/newpost">
            <NewPost
              store={store}
              onShare={addPost}/>
          </Route>
          <Route path="/activity">
            <Activity
              store={store}/>
          </Route>
          <Route path="/profile/:userId?">
              <Profile 
                store={store}
                onFollow={addFollower} 
                onUnfollow={removeFollower}/>
          </Route>
          <Route path="/:postId?">
            <Home 
              store={store}
              onLike={addLike}
              onUnlike={removeLike}
              onComment={addComment}/>
          </Route>
        </Switch>
        </main>
        <Navbar/>
      </div>
    </Router>
  );

  function addLike(postId) {
    const like = {
      userId: store.currentUserId, 
      postId,
      datetime: new Date().toISOString()
    };
    
    setStore({
      ...store,
      likes: store.likes.concat(like)
    });
  }

  function removeLike(postId) {
    setStore({
      ...store,
      likes: store.likes.filter(like=>!(like.postId===postId && like.userId===store.currentUserId))
    });
  }

  function addComment(postId, text){
    const comment = {
      userId: store.currentUserId, 
      postId,
      text,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
        comments:store.comments.concat(comment)
    });
  }

  function addPost(photo, desc){
		// 1. Create a new post object (use uniqueId('post') to create an id)
    const id = uniqueId('post');
    const newPost = {
      id: id,
      userId: store.currentUserId,
      photo: photo,
      desc: desc,
      datetime: new Date().toISOString() 
    }
    // 2. Update the store 
    setStore({
      ...store,
      posts:store.posts.concat(newPost)
    });
  }

  function addFollower(userId, followerId){
    const newFollower = {
      userId: userId,
      followerId: followerId
    };
    setStore({
      ...store,
      followers:store.followers.concat(newFollower)
    });
  }
  function removeFollower(userId, followerId){
    setStore({
      ...store,
      followers: store.followers.filter(follower=>!(follower.userId===userId && follower.followerId===followerId))
    });
  }

}

export default App;
