import React from 'react';

import publicUrl from 'utils/publicUrl';
import timespan from 'utils/timespan.js';

import css from './Post.module.css';

class Post extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <header className={css.postHeader}>
                    <img className={css.userPhoto} src={publicUrl(this.props.user.photo)} alt="User"/>
                    <p className={css.userId}>
                        {this.props.user.id}
                    </p>
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
                        
                        <div className={css.commentRow}>
                            <span className={css.commentor}>{this.props.post.userId} </span>
                            <span>{this.props.post.desc}</span>
                        </div>

                        <div>
                            {
                                this.props.comments.map((c, index) => {
                                    return (
                                        <div key={index} className={css.commentRow}>
                                            <span className={css.commentor}>{c.userId} </span>
                                            <span>{c.text}</span>
                                        </div>
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


export default Post;