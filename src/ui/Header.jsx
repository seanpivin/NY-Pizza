import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="text-red-500 text-center">
      <Link to="/">Sean`s Pizza Co.</Link>
      <SearchOrder />
      <p>Build By SeanPivin & Co.</p>
    </header>
  );
}

export default Header;
