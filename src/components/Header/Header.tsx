import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "@assets/main_logo.svg";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const Header = () => {
  const navigate = useNavigate();

  const getHome = () => {
    navigate("/");
  };

  const addCuisineBtnClickHandler = () => {
    navigate("/add-menu-form");
  };

  const getMenu = () => {
    navigate("/get-menu");
  };

  const getAbout = () => {
    navigate("/about");
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.logo}>
          <img width={100} height={100} src={logo} alt="" />
        </div>

        <div className={styles.nav_btns}>
          <button className={styles.btn} onClick={getHome}>
            Home
          </button>

          <button className={styles.btn} onClick={addCuisineBtnClickHandler}>
            Add cuisine
          </button>

          <button className={styles.btn} onClick={getMenu}>
            Menu
          </button>

          <button className={styles.btn} onClick={getAbout}>
            About
          </button>
        </div>

        <ShoppingCartOutlined
          style={{
            fontSize: "30px",
            margin: "30px 20px 0 0",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};
