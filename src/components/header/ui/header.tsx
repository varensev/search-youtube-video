import {Link} from "react-router-dom";
import styles from './header.module.scss';
import logoImage from '../../../shared/assets/icons/sibdev-logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={logoImage} alt="Логотип" className={styles.logo}/>
                <nav className={styles.links}>
                    <div>
                        <Link to="/">Поиск</Link>
                        <Link to="/">Избранное</Link>
                    </div>
                    <Link to="/">Войти</Link>
                </nav>
            </div>
        </header>
    );
};

export {Header};
