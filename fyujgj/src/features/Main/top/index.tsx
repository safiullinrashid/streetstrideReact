import styles from './index.module.sass';
import top from '../../../assets/images/adidas_page/sneackers/forum.webp';
import {Link} from "react-router-dom";


export const Top = () => {
    return (

        <div className={styles.container}>
            <div className={styles.leftBlock}>
                <div className={styles.textBlockleft}>
                    <p>Товар дня</p>
                </div>
                <div className={styles.imageBlock}>
                    <img src={top} alt="Картинка товара лня"/>
                </div>
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.textBlockName}>
                    <p>Adidas Originals<br/> FORUM Skateboarding Shoes Men</p>
                </div>
                <div className={styles.textBlock}>
                    <p>103$</p>
                </div>
                <Link to="/sneacker" >
                    <button className={styles.button}>Подробнее</button>
                </Link>
        </div>
</div>

)
    ;
};
