import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) {
    return null;
  }

  return (
    <div className="text-sm hiddenn font-bold px-4 py-4 md:block flex items-center justify-between">
      {username}
    </div>
  );
}

export default Username;
