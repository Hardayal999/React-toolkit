import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const cartBadge = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartBadge}</span>
    </button>
  );
};

export default CartButton;
