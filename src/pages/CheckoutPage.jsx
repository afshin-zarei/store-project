import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
// import { useCart } from "../context/CartContext";

import styles from "./CheckoutPage.module.css";

import emptyBasket from "../assets/emptyBasket.png";

function CheckoutPage() {
  // const [state, dispatch] = useCart();

  // const clickHandler = (type, payload) => dispatch({ type, payload });

  // if (!state.itemsCounter) {
  //   return (
  //     <div className={styles.empty_basket}>
  //       <img src={emptyBasket} alt="Empty basket" />
  //       <br />
  //       <p>Your shopping cart is empty!</p>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.container}>
      {/* <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div> */}
    </div>
  );
}

export default CheckoutPage;
