import styles from './index.module.sass';
import w1 from '../../../assets/images/newbalance_page/sneackers/1000w.webp';
import w2 from '../../../assets/images/newbalance_page/sneackers/1000w_2.webp';
import w1_1 from '../../../assets/images/newbalance_page/sneackers/1000.webp';
import w1_2 from '../../../assets/images/newbalance_page/sneackers/1000_2.webp';
import nb801_1 from '../../../assets/images/newbalance_page/sneackers/nb801.webp';
import nb801_2 from '../../../assets/images/newbalance_page/sneackers/nb801_2.webp';
import r1 from '../../../assets/images/newbalance_page/sneackers/1906r.webp';
import r2 from '../../../assets/images/newbalance_page/sneackers/1906r_2.webp';
import nb880_1 from '../../../assets/images/newbalance_page/sneackers/880.webp';
import nb880_2 from '../../../assets/images/newbalance_page/sneackers/880_2.webp';
import nb426_1 from '../../../assets/images/newbalance_page/sneackers/nb426.webp';
import nb426_2 from '../../../assets/images/newbalance_page/sneackers/nb426_2.webp';


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
        brand: 'New Balance',
        model: '1000 series Running shoes Men',
        price: 166,
        imageUrl: w1,
        hoverImageUrl: w2,
        link: 'https://example.com/adidas_sambarose',
    },
    {
        brand: 'New Balance',
        model: '1000 "Silver Metallic"',
        price: 138,
        imageUrl: w1_1,
        hoverImageUrl: w1_2,
        link: 'https://example.com/adidas_zx',
    },
    {
        brand: 'New Balance',
        model: 'NB 801 Outdoor Performance shoes Men',
        price: 65,
        imageUrl: nb801_1,
        hoverImageUrl: nb801_2,
        link: 'https://example.com/nike_dunkocean',
    },
    {
        brand: 'New Balance',
        model: '1906R Driftwood Dark Mushroom',
        price: 144,
        imageUrl: r1,
        hoverImageUrl: r2,
        link: 'https://example.com/nike_vapor',
    },
    {
        brand: 'New Balance',
        model: ' 880 Gun Metal',
        price: 81,
        imageUrl: nb880_1,
        hoverImageUrl: nb880_2,
        link: 'https://example.com/nike_dunk',
    },
    {
        brand: 'New Balance',
        model: 'NB 426 Life Casual Shoes Male',
        price: 102,
        imageUrl: nb426_1,
        hoverImageUrl: nb426_2,
        link: 'https://example.com/nike_dunkcrab',
    },
];

export const SneakersNewbalance: React.FC<SneakersGridProps> = () => {
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
