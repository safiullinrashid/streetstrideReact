import styles from './index.module.sass';
import tgImage from '../../assets/images/main_page/address/tg.jpg';
import instImage from '../../assets/images/main_page/address/inst.jpg';
import vkImage from '../../assets/images/main_page/address/vk.jpg';
import wtappImage from '../../assets/images/main_page/address/watsapp.jpg';

export const Address = () => {
    return (
        <div>
            <div id="address" className={styles.container}>
                <div className={styles.block1}>
                    <div className={styles['text-block']}>
                        <p>г. Казань, ул. Кружевная, 9</p>
                        <p>8 (987) 180-90-10</p>
                        <p>Каждый день с 9:00 до 20:00</p>
                    </div>
                    <div className={styles['image-block']}>
                        <a className={styles.image} href="https://t.me" target="_blank">
                            <img src={tgImage} alt="телеграмм"/>
                        </a>

                        <a className={styles.image} href="https://instagram.com" target="_blank">
                            <img src={instImage} alt="инстаграмм"/>
                        </a>

                        <a className={styles.image} href="https://vk.com" target="_blank">
                            <img src={vkImage} alt="вк"/>
                        </a>

                        <a className={styles.image} href="https://api.whatsapp.com/send?phone=79534862110">
                            <img src={wtappImage} alt="ватсап"/>
                        </a>

                    </div>
                </div>
                <div className={styles.block2}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.811380708888!2d37.60556661631001!3d55.757025380557064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29a825d7e42e2912!2z0JzQvtGB0LrQuNC5INGA0LXQvNC10YDQv9C40YfQtdC90YvQtSDRgNC10LzQtdGANCg0KLQsNGA0YbQsNC40L3QsCwgNSwg0JrRg9GA0LDQstC-0L3QsCwg0JrRg9GA0LDQstCwLCDQmtGD0YDQsNCy0LXQvdCwLCDQmtGD0YDQsNCy0LDQvdCwLCDQmtGD0YDQsNCy0LXQu9GM0L3QvtCz0YDQvtC00LXQvdC40Y8!5e0!3m2!1sru!2sru!4v1648258646860!5m2!1sru!2sru"
                        title="Google Карты"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

