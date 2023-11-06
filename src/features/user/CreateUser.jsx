import { useState } from "react";
import Btn from "../../ui/btn";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <p className="mb-4 text-sm text-stone-500 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 input mb-11"
      />

      {username !== "" && (
        <div>
          <Btn type="primary">Start ordering</Btn>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
