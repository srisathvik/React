import classes from './CartButton.module.css';

import {useDispatch} from 'react-redux';
import {uiActions} from '../../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const totalItems = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();
  // const showCart = useSelector(state => state.cart.showCart);

  function handleToggleCart(){
    dispatch(uiActions.toggleShowCart());
  }


  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
