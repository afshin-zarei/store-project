import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

// import { useProductDetails } from "../context/ProductContext";
import Loader from "../components/Loader";

import { fetchProducts } from "../features/products/productsSlise";
// import store from "../app/store";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productDetails = useSelector((store) =>
    store.products.products.find((i) => i.id === +id)
  );
  console.log(productDetails);

  if (!productDetails) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.category}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div className={styles.parent}>
          <p className={styles.description}>{productDetails.description}</p>
          <div className={styles.child}>
            <span className={styles.price}>
              <IoMdPricetag />
              {productDetails.price} $
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
