import {Link} from "react-router-dom";
import styles from './header.module.scss';
import logoImage from '../../../shared/assets/icons/sibdev-logo.svg';
import {classNames} from "../../../shared/lib/class-names";
import {APP_ROUTER} from "../../../providers/router/config/app-routes.constants";


const Header = () => {


    return (
        <header className={styles.header}>
            <div className={classNames(styles.container, {}, ["container"])}>
                <Link to={APP_ROUTER.ROOT} ><img src={logoImage} alt="Логотип" className={styles.logo}/></Link>
                <nav className={styles.links}>
                    <div>
                        <Link to={APP_ROUTER.search}>Поиск</Link>
                        <Link to={APP_ROUTER.favorites}>Избранное</Link>
                    </div>
                    <Link to={APP_ROUTER.LOGIN}>Выйти</Link>
                </nav>
            </div>
        </header>
    );
};

export {Header};
