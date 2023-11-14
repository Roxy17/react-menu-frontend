import { Link } from "react-router-dom";
import styles from "./Card.module.css";

interface IProps {
  id: string;
  title: string;
  description: string;
  image: string;
  handleMenuDelite: (id: string) => void;
}

export const Card = ({
  title,
  image,
  description,
  id,
  handleMenuDelite,
}: IProps) => {
  return (
    <div className="card_wrapper">
      <div className={styles.wrapper}>
        <div className={styles.header_item}>
          <div className={styles.title}>
            <Link to={`/get-menu/${id}`}>{title}</Link>
          </div>
          <button
            className={styles.btn_del}
            onClick={() => handleMenuDelite(id)}
          >
            x
          </button>
        </div>
        <img className={styles.image} width={300} src={image} alt="" />
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
