import { useContext } from "react";
import { UserContext } from "./ComponentA";

const ComponentC = () => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      ComponentC <span>{`Hello ${user}`}</span>
    </div>
  );
};

export default ComponentC;
