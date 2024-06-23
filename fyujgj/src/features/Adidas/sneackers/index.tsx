import styles from './index.module.sass';
import samb1 from '../../../assets/images/adidas_page/sneackers/sambarose.webp';
import samb2 from '../../../assets/images/adidas_page/sneackers/sambarose2.webp';
import zx1 from '../../../assets/images/adidas_page/sneackers/zx.webp';
import zx2 from '../../../assets/images/adidas_page/sneackers/zx2.webp';
import superstar1 from '../../../assets/images/adidas_page/sneackers/superstar.webp';
import superstar2 from '../../../assets/images/adidas_page/sneackers/superstar2.webp';
import response1 from '../../../assets/images/adidas_page/sneackers/response.webp';
import response2 from '../../../assets/images/adidas_page/sneackers/response2.webp';
import forum1 from '../../../assets/images/adidas_page/sneackers/forum.webp';
import forum2 from '../../../assets/images/adidas_page/sneackers/forum2.webp';
import yung1 from '../../../assets/images/adidas_page/sneackers/yung.webp';
import yung2 from '../../../assets/images/adidas_page/sneackers/yung2.webp';


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
        brand: 'Adidas',
        model: 'Sambarose White Black Gum',
        price: 197,
        imageUrl: samb1,
        hoverImageUrl: samb2,
        link: 'https://example.com/adidas_sambarose',
    },
    {
        brand: 'Adidas Originals',
        model: 'ZX Torsion Lifestyle Shoes Men',
        price: 422,
        imageUrl: zx1,
        hoverImageUrl: zx2,
        link: 'https://example.com/adidas_zx',
    },
    {
        brand: 'Adidas Originals',
        model: 'Superstar Series Skateboarding Shoes Men',
        price: 90,
        imageUrl: superstar1,
        hoverImageUrl: superstar2,
        link: 'https://example.com/nike_dunkocean',
    },
    {
        brand: 'Adidas',
        model: 'Response CL Core Black Carbon',
        price: 79,
        imageUrl: response1,
        hoverImageUrl: response2,
        link: 'https://example.com/nike_vapor',
    },
    {
        brand: 'Adidas Originals',
        model: 'FORUM Skateboarding Shoes Men',
        price: 103,
        imageUrl: forum1,
        hoverImageUrl: forum2,
        link: '/Sneacker',
    },
    {
        brand: 'Adidas Originals',
        model: 'Yung-96 Chunky Sneakers Men',
        price: 84,
        imageUrl: yung1,
        hoverImageUrl: yung2,
        link: 'https://example.com/nike_dunkcrab',
    },
];

export const SneakersAdidas: React.FC<SneakersGridProps> = () => {
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
