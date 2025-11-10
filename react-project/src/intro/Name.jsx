import { useState } from "react";

const Name = ({ username, isLoggedIn }) => {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = () => {
    setFirstName("John");
  };

  return (
    <>
      <div>
        {isLoggedIn ? `Hello ${username} ${firstName}` : "Hello Guest"}
        <br />
        <br />
        <button onClick={handleSubmit}>Enter</button>
      </div>
    </>
  );
};

export default Name;
