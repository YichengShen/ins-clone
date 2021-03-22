import React, { useState } from 'react';

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
  const [page, setPage] = useState('home');
  const [store, setStore] = useState(initialStore);

  return (
    <div className={css.container}>
      <Header/>
      <main className={css.content}>
        {renderMain(page)}
      </main>
      <Navbar onNavChange={setPage}/>
    </div>
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
    // 3. Call setPage to come back to the home page
    setPage('home');
  }

	function cancelPost(){
		// 1. Call setPage to come back to the home page (we will use Router to improve this)
    setPage('home');
	}

  function renderMain(page){
    switch(page){
    case "home": return <Home store={store} 
                          onLike={addLike} 
                          onUnlike={removeLike}
                          onComment={addComment}
                        />;
    case "explore": return <Explore/>;
    case "newpost": return <NewPost
                              store={store}
                              onShare={addPost}
                              onCancel={cancelPost}
                            />;
    case "activity": return <Activity/>;
    case "profile": return <Profile store={store} />;

    default: return <Home/>;
    }
  }

}

export default App;
