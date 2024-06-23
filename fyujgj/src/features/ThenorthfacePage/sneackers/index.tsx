import styles from './index.module.sass';
import out1 from '../../../assets/images/thenorthface_page/sneackers/outdoor.webp';
import out2 from '../../../assets/images/thenorthface_page/sneackers/outdoor2.webp';
import souku1 from '../../../assets/images/thenorthface_page/sneackers/souukuu.webp';
import souku2 from '../../../assets/images/thenorthface_page/sneackers/souukuu2.webp';
import outd1 from '../../../assets/images/thenorthface_page/sneackers/outdor.webp';
import outd2 from '../../../assets/images/thenorthface_page/sneackers/outdor2.webp';
import run1 from '../../../assets/images/thenorthface_page/sneackers/running.webp';
import run2 from '../../../assets/images/thenorthface_page/sneackers/running2.webp';
import runn1 from '../../../assets/images/thenorthface_page/sneackers/runing.webp';
import runn2 from '../../../assets/images/thenorthface_page/sneackers/runing2.webp';
import runni1 from '../../../assets/images/thenorthface_page/sneackers/running3.webp';
import runni2 from '../../../assets/images/thenorthface_page/sneackers/running4.webp';


interface SneakerItem {
    brand: string;
    model: string;
    price: number;
    imageUrl: string;
    hoverImageUrl: string;
    link: string;
}

interface SneakersGridProps {
    sneakers: SneakerItem[];
}

export const sneakerData: SneakerItem[] = [
    {
        brand: 'THE NORTH FACE',
        model: 'Outdoor Performance shoes Men',
        price: 207,
        imageUrl: out1,
        hoverImageUrl: out2,
        link: 'https://example.com/adidas_sambarose',
    },
    {
        brand: 'THE NORTH FACE',
        model: 'SOUKUU series Outdoor Performance shoes Men',
        price: 414,
        imageUrl: souku1,
        hoverImageUrl: souku2,
        link: 'https://example.com/adidas_zx',
    },
    {
        brand: 'THE NORTH FACE',
        model: 'Outdoor Performance shoes Men',
        price: 320,
        imageUrl: outd1,
        hoverImageUrl: outd2,
        link: 'https://example.com/nike_dunkocean',
    },
    {
        brand: 'THE NORTH FACE',
        model: 'Running shoes Men',
        price: 230,
        imageUrl: run1,
        hoverImageUrl: run2,
        link: 'https://example.com/nike_vapor',
    },
    {
        brand: 'THE NORTH FACE',
        model: 'Running shoes Men',
        price: 458,
        imageUrl: runn1,
        hoverImageUrl: runn2,
        link: 'https://example.com/nike_dunk',
    },
    {
        brand: 'THE NORTH FACE',
        model: 'Running shoes Men',
        price: 382,
        imageUrl: runni1,
        hoverImageUrl: runni2,
        link: 'https://example.com/nike_dunkcrab',
    },
];

export const SneakersTheNorthFace: React.FC<SneakersGridProps> = () => {
    return (
        <div className={styles.grid}>
            {sneakerData.map((sneaker, index) => (
                <a
                    key={index}
                    href={sneaker.link}
                    className={styles.gridItem}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={sneaker.imageUrl}
                        alt={`${sneaker.brand} ${sneaker.model}`}
                        onMouseOver={(e) => (e.currentTarget.src = sneaker.hoverImageUrl)}
                        onMouseOut={(e) => (e.currentTarget.src = sneaker.imageUrl)}
                        className={styles.image}
                    />
                    <div className={styles.details}>
                        <p className={styles.modelText}>{sneaker.brand}{sneaker.model}</p>
                        <p className={styles.priceText}>${sneaker.price}</p>
                    </div>
                </a>
            ))}
        </div>
    );
};
