import styles from './index.module.sass';
import image from "../../../assets/images/thenorthface_page/description/thenorthface_logo.jpg";



export const DescriptionTheNorthFace = () => {
    return (

        <div className={styles.container}>
            <div className={styles.leftSide}>
                <img className={styles.image} src={image} alt="картинка the north face"/>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.featureContainer}>
                    <h2 className={styles.title}>THE NORTH FACE</h2>
                    <p className={styles.featureDescription}>Кроссовки The North Face: безграничная свобода в горах</p>
                </div>
                <div className={styles.featureContainer}>
                    <p className={styles.featureDescription}>The North Face – бренд, который олицетворяет дух приключений и стремление к покорению новых вершин. Каждая пара кроссовок, созданная этой легендарной компанией, несет в себе ДНК бесстрашных путешественников и альпинистов, бросающих вызов суровой природе.</p>
                </div>
                <div className={styles.featureContainer}>
                    <p className={styles.featureDescription}>Инженеры The North Face понимают, что успех в экстремальных условиях зависит от каждой мелочи. Именно поэтому они уделяют пристальное внимание разработке инновационных технологий, которые обеспечивают максимальную функциональность и надежность кроссовок.</p>
                </div>
                <div className={styles.featureContainer}>
                    <p className={styles.featureDescription}>Так что, выбирая кроссовки The North Face, вы получаете больше, чем просто удобную обувь. Вы присоединяетесь к сообществу смелых исследователей, готовых отправиться в самые дикие уголки нашей планеты. Это обувь, которая поможет вам раздвинуть границы своих возможностей и открыть для себя новые горизонты. The North Face – это больше, чем просто бренд, это образ жизни, полный приключений и свободы.</p>
                </div>
            </div>
        </div>

    );
};


