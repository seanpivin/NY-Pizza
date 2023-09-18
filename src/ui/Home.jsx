import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className=" text-center my-11 sm:my-16 px-4">
      <h1 className="text-xl  font-semibold text-center mb-9 md:text-3xl">
        The Best Pizza In Twon.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
