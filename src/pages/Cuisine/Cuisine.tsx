import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Cuisine.module.css";

interface ICuisineItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const Cuisine = () => {
  const { menuId } = useParams();
  const [cuisine, setCuisine] = useState<ICuisineItem>();

  const getCuisine = async () => {
    try {
      const response = await fetch(`http://localhost:5000/get-menu${menuId}`);
      const resData = await response.json();
      setCuisine(resData);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Unexpected error", err);
      }
    }
  };

  useEffect(() => {
    getCuisine();
  }, []);

  return (
    <div className="cuisine_wrapper">
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Cuisine</h1>
          <div>{cuisine?.title}</div>
        </div>
        <img className={styles.image} width={300} src={cuisine?.image} alt="" />
        <div className={styles.description}>{cuisine?.description}</div>
      </div>
    </div>
  );
};
