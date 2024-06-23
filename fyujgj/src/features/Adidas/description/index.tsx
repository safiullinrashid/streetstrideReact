import styles from './index.module.sass';
import image from "../../../assets/images/adidas_page/description/adidas-istoriya-logo.png";



export const DescriptionAdidas = () => {
    return (

        <div className={styles.container}>
            <div className={styles.leftSide}>
                <img className={styles.image} src={image} alt="картинка adidas"/>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.featureContainer}>
                    <h2 className={styles.title}>Adidas</h2>
                    <p className={styles.featureDescription}>Кроссовки Adidas: иконы стиля и высоких достижений</p>
                </div>
                <div className={styles.featureContainer}>
                    <p className={styles.featureDescription}>Adidas – бренд, который давно стал синонимом успеха, инноваций и стиля в мире спорта. Каждая пара кроссовок, созданная этой легендарной компанией, несет в себе наследие великих атлетов, покоривших мировые арены, и тех, кто вдохновляется их достижениями.</p>
                </div>
                <div className={styles.featureContainer}>
                    <p className={styles.featureDescription}>Инженеры Adidas неустанно работают над созданием передовых технологий, которые позволяют спортсменам раздвигать границы возможного. От революционных систем амортизации Boost до инновационных материалов, обеспечивающих вентиляцию и поддержку, кроссовки Adidas предлагают совершенное сочетание производительности и комфорта.</p>
                </div>
                <div className={styles.featureContainer}>
                    <p className={styles.featureDescription}>Так что, выбирая кроссовки Adidas, вы становитесь частью легендарного наследия, объединяющего спортивные достижения, культурные тренды и страсть к совершенству. Вы обретаете уверенность в том, что сможете преодолеть любые преграды и достичь своих целей, следуя по стопам величайших атлетов мира.</p>
                </div>
            </div>
        </div>

    );
};


