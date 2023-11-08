import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Btn from "./btn";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className=" text-center my-11 sm:my-16 px-4">
      <h1 className="text-xl  font-semibold text-center mb-9 md:text-3xl">
        The Best Pizza In Twon.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Btn to="/menu" type="primary">
          Continue ordering, {username}
        </Btn>
      )}
    </div>
  );
}

export default Home;
