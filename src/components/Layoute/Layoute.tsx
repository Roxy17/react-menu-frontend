import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import styles from "./Layoute.module.css";

export const Layoute = () => {
  return (
    <div className={styles.layoute}>
      <Header />

      <Outlet />
    </div>
  );
};
