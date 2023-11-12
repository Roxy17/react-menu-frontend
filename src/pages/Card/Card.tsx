import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = ({ title, image, description, id }) => {
  return (
    <div className="card_wrapper">
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Link to={`/get-menu/${id}`}>{title}</Link>
        </div>
        <img className={styles.image} width={300} src={image} alt="" />
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
