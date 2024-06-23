import styles from './index.module.sass';
import nike from '../../../assets/images/main_page/brands/nike_firstscreen 1.png';
import tnf from '../../../assets/images/main_page/brands/thenorthface_firstscreen 1.png';
import adidas from '../../../assets/images/main_page/brands/adidas_firstscreen 1.png';
import nb from '../../../assets/images/main_page/brands/newbakance_firstscreen 1.png';
import {Link} from "react-router-dom";


export const Brands = () => {
    return (

        <div className={styles.brandsSection}>
            <div className={styles.sneakers}>
                <img className={styles.sneakersImagen} src={nike} alt="Feature 1"/>
                <Link to="/nike" className={styles.text}>
                    Nike
                </Link>
            </div>
            <div className={styles.sneakers}>
                <img className={styles.sneakersImaget} src={tnf} alt="Feature 2"/>
                <Link to="/the_north_face" className={styles.text}>
                    The North Face
                </Link>
            </div>
            <div className={styles.sneakers}>
                <img className={styles.sneakersImagea} src={adidas} alt="Feature 3"/>
                <Link to="/adidas" className={styles.text}>
                    Adidas
                </Link>
            </div>
            <div className={styles.sneakers}>
                <img className={styles.sneakersImagene} src={nb} alt="Feature 4"/>
                <Link to="/new_balance" className={styles.text}>
                    New Balance
                </Link>
            </div>
        </div>

    );
};
