import { useState } from 'react';
import styles from './ImageCard.module.css';

export const ImageCard = ({ image: { urls, description } }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={urls.small} alt={description} />
        {isClicked && <div className={styles.imgDarkened}></div>}
      </div>
    </div>
  );
};
