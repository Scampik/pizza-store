import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../slices/modalSlice';

import InDevelopment from './inDevelopment';
import Purchase from './purchase';
import AddCart from './addCart';
import { Pizza } from '../slices/pizzaSlice';
import Cart from './cart';

interface RootState {
  modal: {
    isOpen: boolean;
    type: string;
    item: Pizza;
  };
}

const modals: { [key: string]: React.ComponentType } = {
  inDevelopment: InDevelopment,
  purchase: Purchase,
  addCart: AddCart,
  cart: Cart,
};

const ModalWindow: React.FC  = () => {
  const dispatch = useDispatch();
  const { isOpen, type, item } = useSelector((state: RootState) => state.modal);

  const handleClose = () => dispatch(actions.closeModal());

  const Modal: any = modals[type];

  if (!Modal) {
    return null;
  }
  return <Modal handleClose={handleClose} isOpen={isOpen} item={item} />;
};

export default ModalWindow;
