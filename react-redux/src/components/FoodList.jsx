import { useDispatch, useSelector } from "react-redux";
import { removeFood } from "../foodSlice";

const FoodList = () => {
  const foods = useSelector((state) => state.foods.foods);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFood(id));
  };
  return (
    <div>
      <h1>Food List</h1>
      {foods && foods.length > 0 ? (
        foods.map((food) => (
          <div key={food.id}>
            {food.name}
            <button onClick={() => handleRemove(food.id)}>Removie Item</button>
          </div>
        ))
      ) : (
        <div>
          <p>No food found</p>
        </div>
      )}
    </div>
  );
};

export default FoodList;
