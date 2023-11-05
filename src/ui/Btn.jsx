import { Link } from "react-router-dom";

function Btn({ children, disabled, to }) {
  const className =
    "inline-block rounded-full bg-yellow-400 py-3 px-4 font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-yellow-500 focus:ring foucs:ring-yellow-300 focus:bg-yellow-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed sm:px-6 ms:py-4";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Btn;
