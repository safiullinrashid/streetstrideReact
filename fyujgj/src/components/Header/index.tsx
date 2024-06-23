import styles from './index.module.sass';
import logo from '../../assets/images/header/logo.svg';
import {Link} from "react-router-dom";

export const Header = () => {
    return (

        <div className={styles.header}>
            <div className={styles.center_block}>
                <Link to="/" className={styles.logo_link}>
                    <img className={styles.logo} src={logo} alt="Логотип"/>
                </Link>
            </div>
            <div className={styles.right_block}>
                <p className={styles.header_text}>8 (987) 180-90-10</p>
            </div>
        </div>

    );
};
