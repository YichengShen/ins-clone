import React from 'react';
import css from './Header.module.css';
import publicUrl from 'utils/publicUrl';

function Header() {
    return (
        <header className={css.topHeader}>
            <div className={css.headerItem}>
                <button>
                    <img src={publicUrl('/assets/camera.svg')} alt="Camera"/>
                </button>
            </div>

            <div className={css.headerLogo}>
                <img src={publicUrl('/assets/logo.png')} alt="Logo"/>
            </div>

            <div className={css.headerItem}>
                <button>
                    <img src={publicUrl('/assets/message.svg')} alt="Message"/>
                </button>
            </div>
        </header>
    );
}

export default Header;