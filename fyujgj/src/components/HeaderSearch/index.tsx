import styles from './index.module.sass';
import {Link} from "react-router-dom";
import bag from '../../assets/images/header_search/Bag.png';
import heart from '../../assets/images/header_search/heart.png';

export const Header_search = () => {
    const handleWhereAreWeClick = () => {
        const addressElement = document.getElementById('Address');
        if (addressElement) {
            addressElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.background_header}>
            <div className={styles.header_search}>
                <div className={styles.left_block}>
                    <Link to="/login" className={styles.text}>
                        Личный кабинет
                    </Link>
                </div>
                <div className={styles.right_block}>
                    <Link to="#" onClick={handleWhereAreWeClick} className={styles.text}>
                        Где мы находимся?
                    </Link>
                    <img className={styles.bag} src={bag} alt="Корзина" />
                    <img className={styles.heart} src={heart} alt="Избранные" />
                </div>
            </div>
        </div>
    );
};