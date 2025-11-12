import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../foodSlice";

const FoodInput = () => {
  const [newFood, setNewFood] = useState("");
  const dispath = useDispatch();

  const handleAddFood = () => {
    if (newFood) {
      dispath(addFood(newFood));
      setNewFood("");
    }
  };
  return (
    <div>
      <input type="text" onChange={(e) => setNewFood(e.target.value)} value={newFood}/>
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default FoodInput;
