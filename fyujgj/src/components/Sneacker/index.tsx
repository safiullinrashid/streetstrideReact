import React, {useState} from "react";
import styles from './index.module.sass';
import forum1 from '../../assets/images/adidas_page/sneackers/forum.webp';
import forum2 from '../../assets/images/adidas_page/sneackers/forum2.webp';
import forum3 from '../../assets/images/adidas_page/sneackers/forum3.webp';
import forum4 from '../../assets/images/adidas_page/sneackers/forum4.webp';


export const images = [
    forum1,
    forum2,
    forum3,
    forum4,
];

export const Sneacker: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className={styles.gallery_container}>
            <div className={styles.left_block}>
                <div className={styles.thumbnail_block}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={styles.thumbnail}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
                <div className={styles.selected_image_block}>
                    <img src={selectedImage} alt="Selected" className={styles.selected_image}/>
                </div>
            </div>
            <div className={styles.right_block}>
                <div className={styles.text_block1}>Adidas Originals <br/> FORUM Skateboarding Shoes Men</div>
                <div className={styles.text_block}>103$</div>
                <div className={styles.razm}>
                    <div className={styles.text_block_razm}>41</div>
                    <div className={styles.text_block_razm}>41.5</div>
                    <div className={styles.text_block_razm}>42</div>
                    <div className={styles.text_block_razm}>42.5</div>
                    <div className={styles.text_block_razm}>43</div>
                    <div className={styles.text_block_razm}>43.5</div>
                    <div className={styles.text_block_razm}>44</div>
                </div>
            </div>
        </div>
    );
}