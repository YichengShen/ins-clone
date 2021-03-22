import React from 'react';

import Avatar from './common/Avatar.js';
import Name from './common/Name.js';
import PostThumbnail from './common/PostThumbnail.js';

import css from './Profile.module.css';

function Profile(props) {
    const currentUserId = props.store.currentUserId;
    const currentUser = props.store.users.find(user=>user.id===currentUserId);

    const posts = getPosts(props.store.posts, currentUserId);
    const followers = getFollowers(props.store.followers, currentUserId)
    const following = getFollowing(props.store.followers, currentUserId)

    return (
        <div className={css.profileContainer}>
            <header className={css.profileHeader}>
                <div className={css.avatarContainer}>
                    <Avatar photo={currentUser.photo} />
                </div>
                <Name name={currentUser.id}/>
            </header>

            <section className={css.personalInfo}>
                <div className={css.fullName}>
                    {currentUser.name}
                </div>
                <div className={css.bio}>
                    {currentUser.bio}
                </div>
            </section>

            <div className={css.stats}>
                <StatsSquare number={posts.length} text="posts" />
                <StatsSquare number={followers.length} text="followers" />
                <StatsSquare number={following.length} text="following" />
            </div>

            <div className={css.posts}>

                {posts.map(p=>{
                    return (<PostThumbnail key={p.id} 
                                post={p} 
                            />)
                })}
                
            </div>
            
              
        </div>
    );
}

function getPosts(posts, userId) {
    return posts.filter(post=>post.userId===userId);
}

function getFollowers(followers, userId) {
    return followers.filter(follower=>follower.userId===userId);
}

function getFollowing(followers, userId) {
    return followers.filter(follower=>follower.followerId===userId);
}

function StatsSquare(props) {
    return (
        <div>
            <div className={css.statsNumber}>
                {props.number}
            </div>
            <div className={css.statsText}>
                {props.text}
            </div>
        </div>
    );
}

export default Profile;