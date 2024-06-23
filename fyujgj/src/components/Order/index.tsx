import styles from './index.module.sass';
import {Link} from "react-router-dom";

export const Order = () => {
    return (
        <div className={styles.order}>
                <div className={styles.button}>
                    <Link to="/login" className={styles.text}>
                        Закажите прямо сейчас
                    </Link>
                </div>

        </div>

    );
};