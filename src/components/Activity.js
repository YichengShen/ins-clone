import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PostThumbnail from './common/PostThumbnail.js';

import css from './Activity.module.css';

function Activity(props) {
    const [searchInput, setSearchInput] = useState('');

    const myLikes = props.store.likes.filter(like => like.userId===props.store.currentUserId);
    const likedPosts = props.store.posts.filter(post => myLikes.some(l => l.postId===post.id));

    return (
        <div>
            <div className={css.activityHeader}>
                Liked Posts      
                <br/>
                <input className={css.search} onChange={handleSearch} placeholder={"Search with user id..."}/>
            </div>
            
            <div className={css.posts}>

                {likedPosts.filter(post => searchInput!=='' ? post.userId.includes(searchInput.toLowerCase()) : true)
                .map(p=>{
                    return (<Link key={p.id} to={'/'+p.id}>
                                <PostThumbnail key={p.id} 
                                    post={p} 
                                />
                            </Link>
                    )                            
                })}
                
            </div>
        </div>
    );

    function handleSearch(e) {
        setSearchInput(e.target.value);
    }
}

export default Activity;