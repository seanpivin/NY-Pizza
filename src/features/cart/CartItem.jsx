import { formatCurrency } from "../../utils/helpers";
import DeleteItemBtn from "./DeleteItemBtn";
import UpdateItemQantity from "./UpdateItemQantity";
import { useSelector } from "react-redux";
import { getCurrentquantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentquantityById(pizzaId));

  return (
    <li className=" py-3 sm:flex sm:items-center sm:justify-between">
      <p className=" mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className=" flex items-center justify-between sm:gap-6 ">
        <p className=" text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItemBtn pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
