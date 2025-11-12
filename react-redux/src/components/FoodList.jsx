import { useSelector } from "react-redux";

const FoodList = () => {
  const foods = useSelector((state) => state.foods.foods);
  return (
    <div>
      <h1>Food List</h1>
      {foods && foods.length > 0 ? (
        foods.map((food) => <div key={food.id}>{food.name}</div>)
      ) : (
        <div>
          <p>No food found</p>
        </div>
      )}
    </div>
  );
};

export default FoodList;
