import React from 'react';

import publicUrl from 'utils/publicUrl';
import timespan from 'utils/timespan.js';

import css from './Post.module.css';

class Post extends React.PureComponent{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <React.Fragment>
                <header className={css.postHeader}>
                    <Avatar user={this.props.user} />
                    <Name user={this.props.user} />
                </header>
                <article className={css.postContent}>
                    <img className={css.postPhoto} src={publicUrl(this.props.post.photo)} alt="Post"/>
                    
                    <div className={css.indent}>
                        <div className={css.likeCommentIcons}>
                            {
                                this.props.likes.self ? 
                                <img className={css.iconItem} src={publicUrl('/assets/unlike.svg')} alt="Unlike"/> : 
                                <img className={css.iconItem} src={publicUrl('/assets/like.svg')} alt="Like"/>
                            }
                            <img className={css.iconItem} src={publicUrl('/assets/comment.svg')} alt="Comment"/>
                        </div>
                        <div className={css.likeCount}>{this.props.likes.count} likes</div>
                        
                        <Comment user={this.props.post.userId} comments={this.props.post.desc} />

                        <div>
                            {
                                this.props.comments.map((c, index) => {
                                    return (
                                        <Comment user={c.userId} comments={c.text} key={index}/>
                                    )
                                })
                            }
                        </div>

                        <div className={css.time}>{timespan(this.props.post.datetime).toUpperCase()} AGO</div>

                    </div>
                    
                </article>
            </React.Fragment>
        );
    }
}

function Avatar(props) {
    return (
        <img className={css.userPhoto} 
            src={publicUrl(props.user.photo)} 
            alt={props.user.id}
        />
    );
}

function Name(props) {
    return (
        <p className={css.userId}>
            {props.user.id}
        </p>
    );
}

function Comment(props) {
    return (
        <div className={css.commentRow}>
            <span className={css.commentor}>{props.user} </span>
            <span>{props.comments}</span>
        </div>
    );
}


export default Post;