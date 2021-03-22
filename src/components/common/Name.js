import css from './Name.module.css';

export default function Name(props) {
    return (
        <p className={css.userId}>
            {props.name}
        </p>
    );
}