import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-700 text-stone-200 text-center uppercase py-4 sm:px-6 px-4 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="./Cart"> Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
