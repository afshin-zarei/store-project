import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import { useProductDetails } from "../context/ProductContext";
import Loader from "../components/Loader";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();

  const productDEtails = useProductDetails(+id);
  console.log(productDEtails);

  if (!productDEtails) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={productDEtails.image} alt={productDEtails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDEtails.title}</h3>
        <p className={styles.category}>
          <SiOpenproject />
          {productDEtails.category}
        </p>
        <div className={styles.parent}>
          <p className={styles.description}>{productDEtails.description}</p>
          <div className={styles.child}>
            <span className={styles.price}>
              <IoMdPricetag />
              {productDEtails.price} $
            </span>
            <Link to="/products">
              <FaArrowLeft />
              <span>Back to shop</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
