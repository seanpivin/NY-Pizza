import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-400 text-center uppercase px-5 py-4 border-b-8 border-stone-400 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-wider font-bold">
        Alessandro Del-Piero`s Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
      <p className="font-bold">Build By Sean Pivin</p>
    </header>
  );
}

export default Header;
