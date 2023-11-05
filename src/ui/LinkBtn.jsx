import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LinkBtn({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-700 hover:underline";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link
      to={to}
      className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkBtn;