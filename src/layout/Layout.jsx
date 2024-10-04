import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

// import { useCart } from "../context/CartContext";

import styles from "./Layout.module.css";

function Layout({ children }) {
  // const [state] = useCart();

  const state = useSelector((store) => store.cart);

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">ShamaranShop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Afshin with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
