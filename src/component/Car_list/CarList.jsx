import { useSelector } from "react-redux";
import { CarCard } from "../Car_card/CarCard";

const CarList = () => {
  const data= useSelector((state) => {
    const data = state.car.carsData.filter((car) =>
      car.name.toLowerCase().includes(state.car.searchString.toLowerCase())
    );
    return  data
  });

  return (
    <div className="mt-5 overflow-auto h-[400px]">
      <div className="grid grid-cols-3 justify-items-center gap-2">
        {data.map((car) => {
          return (
            <div key={car.id}>
              <CarCard data={car} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { CarList };
