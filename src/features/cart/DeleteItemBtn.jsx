import Btn from "../../ui/btn";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItemBtn({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Btn type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Btn>
  );
}

export default DeleteItemBtn;
