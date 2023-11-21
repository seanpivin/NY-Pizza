import { Link } from "react-router-dom";

function Btn({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full hover:text-white bg-yellow-400 font-semibold uppercase tracking-wide transition-colors duration-200 hover:bg-yellow-500 focus:ring foucs:ring-yellow-300 focus:bg-yellow-400 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";
  const styles = {
    primary: base + "py-3 px-4 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm",
    secondary:
      base +
      " border border-yellow-400 text-sm text-black-400 hover:bg-yellow-400 hover:text-white focus:bg-yellow-400 focus:text-white focus:ring-yellow-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm",
    round:
      base +
      "px-2 py-1 md:px-5 md:py-2.5 text-xs md:px-3 md:py-2 text-sm rounded-full",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Btn;
