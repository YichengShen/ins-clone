import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PostThumbnail from './common/PostThumbnail.js';

import css from './Explore.module.css';

function Explore(props) {
    const [searchInput, setSearchInput] = useState('');

    const allPosts = props.store.posts;

    return (
        <div>
            <div className={css.exploreHeader}>
                Explore       
                <br/>
                <input className={css.search} onChange={handleSearch} placeholder={"Search with user id..."}/>
            </div>
            
            <div className={css.posts}>

                {allPosts.filter(post => searchInput!=='' ? post.userId.includes(searchInput.toLowerCase()) : true)
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

export default Explore;