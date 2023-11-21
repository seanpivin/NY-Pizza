import Btn from "../../ui/btn";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";

function UpdateItemQantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className=" flex gap-1 items-center md:gap-3">
      <Btn type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Btn>
      <span className=" text-sm font-medium gap-1">{currentQuantity}</span>
      <Btn type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Btn>
    </div>
  );
}

export default UpdateItemQantity;
