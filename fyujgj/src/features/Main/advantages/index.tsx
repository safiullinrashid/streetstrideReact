import styles from './index.module.sass';
import store from '../../../assets/images/main_page/advantages/advantages_store.png';
import leftup from '../../../assets/images/main_page/advantages/3 User.png';
import rightup from '../../../assets/images/main_page/advantages/Time Circle.png';
import leftdown from '../../../assets/images/main_page/advantages/Shield Done.png';
import rightdown from '../../../assets/images/main_page/advantages/Discount.png';



export const Advantages = () => {
    return (

        <div className={styles.background__advantages}>
            <div className={styles.container}>
                <div className={styles.container__image}>
                    <img className={styles.mainImage} src={store} alt="Наш магазин"/>
                </div>
                <div className={styles.container__content}>
                    <div className={styles.container__content__textMain}>
                        <p>Мультибрендовый магазин STREETSTRIDE</p>
                    </div>
                    <div className={styles.container__content__text}>
                        <p>STREETSTRIDE — ваш источник уникальных кроссовок, одежды и аксессуаров. Мы предлагаем индивидуальный подход, оригинальные товары от ведущих брендов, удобный онлайн-магазин и физический магазин в центре Москвы по адресу:Тверская, 19. Создавайте свой стиль с STREETSTRIDE!</p>
                    </div>
                    <div className={styles.container__content__blocks}>
                        <div className={styles.container__content__blocks__item}>
                            <div className={styles.container__content__blocks__item__image}>
                                <img src={leftup} alt="Значек"/>
                            </div>
                            <div className={styles.container__content__blocks__item__texts}>
                                <div className={styles.container__content__blocks__item__texts__textMain}>
                                    <p>Доверие</p>
                                </div>
                                <div className={styles.container__content__blocks__item__texts__text}>
                                    <p>С 2020 года наш магазин осчастливил тысячи клиентов и заслужил доверие благодаря надежности и высокому качеству обслуживания.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container__content__blocks__item}>
                            <div className={styles.container__content__blocks__item__image}>
                                <img src={rightup} alt="Значек"/>
                            </div>
                            <div className={styles.container__content__blocks__item__texts}>
                                <div className={styles.container__content__blocks__item__texts__textMain}>
                                    <p>Быстрая доставка</p>
                                </div>
                                <div className={styles.container__content__blocks__item__texts__text}>
                                    <p>Доставляем товары из наличия в день заказа, индивидуальные заказы: 5-7 рабочих дней.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container__content__blocks__item}>
                            <div className={styles.container__content__blocks__item__image}>
                                <img src={leftdown} alt="Значек"/>
                            </div>
                            <div className={styles.container__content__blocks__item__texts}>
                                <div className={styles.container__content__blocks__item__texts__textMain}>
                                    <p>Гарантия подлинности</p>
                                </div>
                                <div className={styles.container__content__blocks__item__texts__text}>
                                    <p>Все товары проходят двойную проверку на качество и оригинальность перед отправкой клиенту.</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container__content__blocks__item}>
                            <div className={styles.container__content__blocks__item__image}>
                                <img src={rightdown} alt="Значек"/>
                            </div>
                            <div className={styles.container__content__blocks__item__texts}>
                                <div className={styles.container__content__blocks__item__texts__textMain}>
                                    <p>Лояльные цены</p>
                                </div>
                                <div className={styles.container__content__blocks__item__texts__text}>
                                    <p>Мы внимательно следим за рынком лимитированных вещей и предлагаем лучшие условия нашим клиентам.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
