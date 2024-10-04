import { Link } from "react-router-dom";

import static404 from "../assets/static_404.webp";

import styles from "./404.module.css";

function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <img src={static404} alt="The desired page was not found" />
        <Link to="/products">
          <span>Back to shop</span>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
