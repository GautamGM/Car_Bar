import { changeCarName, changeCarCost, addCar } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { CarSearch } from "../index";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    console.log(state);
    return {
      name: state.form.name,
      cost: state.form.cost ||0,
    };
  });

  const handleName = (e) => {
    dispatch(changeCarName(e.target.value));
  };

  const handleCost = (e) => {
    // use  of the chnade chnage and other function related to the form slice
    dispatch(changeCarCost(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // use of the car slice--> here i am stuck ,what is the use of the handlesubmit function
   if(name&&cost){
    dispatch(addCar({ name, cost }));
   }else{
    alert("please Enter the data")
   }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form flex justify-center border pt-4 ">
          <div className="input-group ">
            <label htmlFor="name" className="text-[18px] font-[600]">
              car name
            </label>
            <input
              type="text"
              className="border border-black p-1 ml-2 rounded-[9px]"
              id="name"
              placeholder="Enter car name"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="input-group ml-3 ">
            <label htmlFor="cost" className="text-[18px] font-[600]">
              Cost{" "}
            </label>
            <input
              type="number"
              id="cost"
              placeholder="Enter cost"
              className="border border-black p-1 ml-2 rounded-[9px]"
              value={cost || ""}
              onChange={handleCost}
            />
          </div>
        </div>
        <div className="text-center mt-2">
          <button
            type="submit"
            className="border p-2 w-[300px] rounded-[10px] bg-red-500 text-white shadow-sm shadow-black "
          >
            Add Car
          </button>

        
        </div>
      </form>
      {/* search bar  */}
      <div className="text-center">
        <CarSearch/>
      </div>
    </div>
  );
};
export { CarForm };
