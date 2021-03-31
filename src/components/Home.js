import React from 'react';
import { useParams } from 'react-router-dom';

import css from './Home.module.css';

import Post from './Post.js';

function Home(props) {
    const {store} = props;

    let {postId} = useParams(); // the variable name has to match the parameter name

    return (
        <div className={css.container}>
            {store.posts.filter(post => (typeof postId !== 'undefined') ? (post.id === postId) : true)
            .sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
            .map(post=>
                <Post
                    key={post.id}
                    user={findUser(post, store)}
                    post={post}
                    comments={findComments(post, store)}
                    likes={findLikes(post, store)}
                    onLike={props.onLike}
                    onUnlike={props.onUnlike}
                    onComment={props.onComment}
                />)}
        </div>
    );
}

function findUser(post, store){
    return store.users.find(user=>user.id===post.userId);
}

function findComments(post, store){
    return store.comments.filter(comment=>comment.postId===post.id);
}

function findLikes(post, store){
    let postLikes = store.likes.filter(like=>like.postId===post.id);
    return {
        self: postLikes.some(like=> like.userId===store.currentUserId),
        count: postLikes.length
    }
}


export default Home;