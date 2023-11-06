import LinkBtn from "../../ui/LinkBtn";
import Btn from "../../ui/btn";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className=" px-4 py-3">
      <LinkBtn to="/menu">&larr; Back to menu</LinkBtn>

      <h2 className=" mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="mt-4 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Btn type="small" to="/order/new">
          Order pizzas
        </Btn>

        <Btn type="secondary">Clear cart</Btn>
      </div>
    </div>
  );
}

export default Cart;
