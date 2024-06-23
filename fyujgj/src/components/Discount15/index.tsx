import styles from './index.module.sass';
import discount from '../../assets/images/main_page/discount15/Discount15.png';
import {Link} from "react-router-dom";

interface Props {
    discountValue: number;
}

export const Discount = (props: Props) => {
    const { discountValue = 15 } = props;

    return (

        <div className={styles.container}>
            <img src={discount} alt="Зарегистрируйся сейчас и получи скидку 15%!"/>
            <Link to="/registration" >
                <p>Зарегистрируйся сейчас и получи скидку {discountValue}%!</p>
            </Link>
        </div>

    );
};
