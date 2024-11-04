import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  // console.log(props);
  const { name, quantity, totalPrice, price } = props.currItem;
  // console.log(props.currItem);
  const dispatch = useDispatch();

  function hadleDecreaseItem(){
    dispatch(cartActions.removeItemFromCart(props.currItem.id));
  }
  function handleIncreaseItem(){
    dispatch(cartActions.addItemToCart(props.currItem));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={hadleDecreaseItem}>-</button>
          <button onClick={handleIncreaseItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
