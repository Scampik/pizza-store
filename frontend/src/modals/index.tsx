import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../slices/modalSlice';

import InDevelopment from './inDevelopment';
import Purchase from './purchase';

interface RootState {
  modal: {
    isOpen: boolean;
    type: string;
  };
}

const modals: { [key: string]: React.ComponentType } = {
  inDevelopment: InDevelopment,
  purchase: Purchase,
};

const ModalWindow: React.FC  = () => {
  const dispatch = useDispatch();
  const { isOpen, type } = useSelector((state: RootState) => state.modal);

  const handleClose = () => dispatch(actions.closeModal());

  const Modal: any = modals[type];

  if (!Modal) {
    return null;
  }
  return <Modal handleClose={handleClose} isOpen={isOpen} />;
};

export default ModalWindow;
