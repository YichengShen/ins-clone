import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import Avatar from "./common/Avatar.js";
import Name from "./common/Name.js";
import PostThumbnail from "./common/PostThumbnail.js";

import css from "./Profile.module.css";
import { StoreContext } from "contexts/StoreContext";

function Profile() {
  let {
    users,
    posts: allPosts,
    followers: allFollowers,
    currentUserId,
    addFollower,
    removeFollower,
  } = useContext(StoreContext);
  let { userId } = useParams();

  // Check if the userId parameter is defined
  const displayedUserId =
    typeof userId !== "undefined" ? userId : currentUserId;

  const displayedUser = users.find((user) => user.id === displayedUserId);

  const posts = getPosts(allPosts, displayedUserId);
  const followers = getFollowers(allFollowers, displayedUserId);
  const following = getFollowing(allFollowers, displayedUserId);

  const followed = followers.some(
    (follower) =>
      follower.userId === displayedUserId &&
      follower.followerId === currentUserId
  );

  return (
    <div className={css.profileContainer}>
      <header className={css.profileHeader}>
        <div className={css.avatarContainer}>
          <Avatar photo={displayedUser.photo} />
        </div>
        <Name name={displayedUser.id} />
        {displayedUserId !== currentUserId &&
          (followed ? (
            <button className={css.unfollowBtn} onClick={handleUnfollow}>
              Unfollow
            </button>
          ) : (
            <button className={css.followBtn} onClick={handleFollow}>
              Follow
            </button>
          ))}
      </header>

      <section className={css.personalInfo}>
        <div className={css.fullName}>{displayedUser.name}</div>
        <div className={css.bio}>{displayedUser.bio}</div>
      </section>

      <div className={css.stats}>
        <StatsSquare number={posts.length} text="posts" />
        <StatsSquare number={followers.length} text="followers" />
        <StatsSquare number={following.length} text="following" />
      </div>

      <div className={css.posts}>
        {posts.map((p) => {
          return (
            <Link key={p.id} to={"/" + p.id}>
              <PostThumbnail key={p.id} post={p} />
            </Link>
          );
        })}
      </div>
    </div>
  );

  function handleFollow() {
    addFollower(displayedUserId, currentUserId);
  }

  function handleUnfollow() {
    removeFollower(displayedUserId, currentUserId);
  }
}

function getPosts(posts, userId) {
  return posts.filter((post) => post.userId === userId);
}

function getFollowers(followers, userId) {
  return followers.filter((follower) => follower.userId === userId);
}

function getFollowing(followers, userId) {
  return followers.filter((follower) => follower.followerId === userId);
}

function StatsSquare(props) {
  return (
    <div>
      <div className={css.statsNumber}>{props.number}</div>
      <div className={css.statsText}>{props.text}</div>
    </div>
  );
}

export default Profile;
