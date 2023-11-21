import Btn from "../../ui/btn";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentquantityById } from "../cart/cartSlice";
import DeleteItemBtn from "../cart/DeleteItemBtn";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentquantityById(id));

  const isInTheCart = currentQuantity > 0;

  function handleCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? " grayscale opacity-70" : ""}`}
      />
      <div className="flex-col flex grow pt-0.5">
        <p className=" font-medium">{name}</p>
        <p className=" text-sm italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInTheCart && <DeleteItemBtn pizzaId={id} />}

          {!soldOut && !isInTheCart && (
            <Btn type="small" onClick={handleCart}>
              Add to Cart
            </Btn>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
