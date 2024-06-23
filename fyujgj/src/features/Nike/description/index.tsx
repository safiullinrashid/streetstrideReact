import styles from './index.module.sass';
import image from "../../../assets/images/nike_page/descriptionNike/NikePage_description.jpg";



export const DescriptionNike = () => {
    return (

            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <img className={styles.image} src={image} alt="картинка nike"/>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.featureContainer}>
                        <h2 className={styles.title}>Nike</h2>
                        <p className={styles.featureDescription}>Кроссовки Nike: совершенство, рожденное из стремления к
                            высотам</p>
                    </div>
                    <div className={styles.featureContainer}>
                        <p className={styles.featureDescription}>Бренд Nike олицетворяет непреклонную волю к победе,
                            стремление к совершенству и постоянное стремление к инновациям. Эти принципы воплощены в
                            каждой паре кроссовок, созданной легендарной компанией.</p>
                    </div>
                    <div className={styles.featureContainer}>
                        <p className={styles.featureDescription}>Инженеры Nike неустанно работают над разработкой
                            новейших технологий, чтобы обеспечить максимальный комфорт, амортизацию и сцепление с
                            поверхностью для любого вида спорта. Будь то беговые кроссовки, кроссовки для тренажерного
                            зала или повседневной носки, Nike предлагает решения, которые соответствуют потребностям
                            даже самых требовательных атлетов.</p>
                    </div>
                    <div className={styles.featureContainer}>
                        <p className={styles.featureDescription}>Так что, выбирая кроссовки Nike, вы не просто
                            приобретаете обувь – вы становитесь частью легендарного наследия, воплощающего дух
                            преодоления, инноваций и стремления к вершинам.</p>
                    </div>
                </div>
            </div>

    );
};


