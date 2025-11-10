import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("John Doe");
  return (
    <>
      <div className="box">
        ComponentA <br /> <span>{`Hello ${user}`}</span>
        <UserContext.Provider value={user}>
          <ComponentB user={user} />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default ComponentA;
