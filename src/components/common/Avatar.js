import publicUrl from 'utils/publicUrl';

import css from './Avatar.module.css';

export default function Avatar(props) {
    return (
        <img className={css.userAvatar} 
            src={publicUrl(props.photo)} 
            alt="Avatar"
        />
    );
}