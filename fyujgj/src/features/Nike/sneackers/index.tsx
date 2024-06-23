import styles from './index.module.sass';
import air1 from '../../../assets/images/nike_page/sneackers/airmonarch1.webp';
import air2 from '../../../assets/images/nike_page/sneackers/airmonarch2.webp';
import airv1 from '../../../assets/images/nike_page/sneackers/airvapormax1.webp';
import airv2 from '../../../assets/images/nike_page/sneackers/airvapormax2.webp';
import blazer1 from '../../../assets/images/nike_page/sneackers/blazer1.webp';
import blazer2 from '../../../assets/images/nike_page/sneackers/blazer2.webp';
import dunk1 from '../../../assets/images/nike_page/sneackers/dunklow1.webp';
import dunk2 from '../../../assets/images/nike_page/sneackers/dunklow2.webp';
import dunko1 from '../../../assets/images/nike_page/sneackers/dunklowocean1.webp';
import dunko2 from '../../../assets/images/nike_page/sneackers/dunklowocean2.webp';
import dunkc1 from '../../../assets/images/nike_page/sneackers/dunklowcrab1.webp';
import dunkc2 from '../../../assets/images/nike_page/sneackers/dunklowcrab2.webp';

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
        brand: 'Nike',
        model: 'Air Monarch IV White Navy',
        price: 82,
        imageUrl: air1,
        hoverImageUrl: air2,
        link: 'https://example.com/nike_monarch',
    },
    {
        brand: 'Nike',
        model: 'Blazer Low 77 Jumbo White Old Royal',
        price: 72,
        imageUrl: blazer1,
        hoverImageUrl: blazer2,
        link: 'https://example.com/nike_blazer',
    },
    {
        brand: 'Nike',
        model: 'Dunk Low Scrap Sea Glas',
        price: 142,
        imageUrl: dunko1,
        hoverImageUrl: dunko2,
        link: 'https://example.com/nike_dunkocean',
    },
    {
        brand: 'Nike',
        model: 'Air VaporMax 2019 Triple Running shoes Black Male',
        price: 268,
        imageUrl: airv1,
        hoverImageUrl: airv2,
        link: 'https://example.com/nike_vapor',
    },
    {
        brand: 'Nike',
        model: 'Dunk Low "Grey Fog"',
        price: 117,
        imageUrl: dunk1,
        hoverImageUrl: dunk2,
        link: 'https://example.com/nike_dunk',
    },
    {
        brand: 'Nike',
        model: 'Dunk Low Scrap Knicks',
        price: 123,
        imageUrl: dunkc1,
        hoverImageUrl: dunkc2,
        link: 'https://example.com/nike_dunkcrab',
    },
];

export const SneakersNike: React.FC<SneakersGridProps> = () => {
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
