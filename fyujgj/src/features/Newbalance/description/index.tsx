import styles from './index.module.sass';
import image from "../../../assets/images/newbalance_page/description/newbalance_logo.jpg";



export const DescriptionNewbalance = () => {
    return (

        <div className={styles.container}>
            <div className={styles.leftSide}>
                <img className={styles.image} src={image} alt="картинка adidas"/>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.featureContainer}>
                    <h2 className={styles.title}>New Balance</h2>
                    <p className={styles.featureDescription}>Кроссовки New Balance: безупречное сочетание функциональности и стиля</p>
                </div>
                <div className={styles.featureContainer}>
                    <p className={styles.featureDescription}>New Balance – бренд, который вот уже более ста лет олицетворяет истинный дух спорта и стремление к совершенству. Каждая пара кроссовок, созданная этой легендарной компанией, несет в себе наследие инноваций, качества и страсти к движению.</p>
                </div>
                <div className={styles.featureContainer}>
                    <p className={styles.featureDescription}>Инженеры New Balance неустанно работают над разработкой передовых технологий, которые обеспечивают максимальную производительность и комфорт для любого вида активности. От систем амортизации с распределением нагрузки до инновационных материалов, обеспечивающих воздухопроницаемость и поддержку, кроссовки New Balance гарантируют безупречный результат.</p>
                </div>
                <div className={styles.featureContainer}>
                    <p className={styles.featureDescription}>Выбирая кроссовки New Balance, вы становитесь частью легендарного наследия, в котором сочетаются инновации, качество и страсть к движению. Вы обретаете уверенность в том, что ваша обувь будет сопровождать вас в любых испытаниях и позволит добиваться новых высот в спорте и жизни.</p>
                </div>
            </div>
        </div>

    );
};


